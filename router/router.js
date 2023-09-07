let router = require("express").Router(); 

const user = require ("../controller/userController"); 
const role = require("../controller/roleController");

// user routers
router.post("/",user.create); 
router.put('/updateRole/:id',user.updateUser);
router.get('/getUser',user.getUser);
router.get('/getUserByID/:id',user.getUserByID);

// role routers
router.post('/addRole',role.createRole);
router.put('/updateRoleName/:id',role.updateRole);
router.get('/getAllRole',role.getAllRole);
module.exports = router; 