const Email = require("../models/EmailModels");
 
module.exports.getEmail = async (req, res) => {
    try {
        const email = await Email.find();
        res.json(email);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
module.exports.getEmailById = async (req, res) => {
    try {
        const email = await Email.findById(req.params.id);
        res.json(email);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
module.exports.saveEmail = async (req, res) => {
    const email = new Email(req.body);
    try {
        const insertedemail = await email.save();
        res.status(201).json(insertedemail);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
module.exports.updateEmail = async (req, res) => {
    try {
        const updatedemail = await Email.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedemail);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
module.exports.deleteEmail = async (req, res) => {
    try {
        const deletedemail = await Email.deleteOne({_id:req.params.id});
        res.status(200).json(deletedemail);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}