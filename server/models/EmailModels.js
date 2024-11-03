const mongoose = require("mongoose");
 
const emailSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true, "Your email is required"],
    },
    date:{
        type: Date,
        default: new Date(),
        required: [true, "Your date is required"],
    },
    description:{
        type: String,
        required: [true, "Your description is required"],
    }
});
 
module.exports = mongoose.model("Email", emailSchema);