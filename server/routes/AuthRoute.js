const { Signup, Login } = require("../controller/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const { 
    getEmail, 
    getEmailById,
    saveEmail,
    updateEmail,
    deleteEmail } = require("../controller/EmailController");

const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/', userVerification);


router.get('/email', getEmail);
router.get('/email/:id', getEmailById);
router.post('/email', saveEmail);
router.patch('/email/:id', updateEmail);
router.delete('/email/:id', deleteEmail);

module.exports = router;