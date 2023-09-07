const db = require("../Db/db.config");

const role = db.role;

async function createRole(req,res){
    try{
        const values = req.body;
        const user = {}
        user.role_name = values.role_name
        if((user.role_name == null) || (user.role_name == undefined)){
            return res.status(400).json({message: "Invalid data "})
        }
        const data = await role.create(user);
        return res.status(200).json({ message: "create successfully", result: data })
    } catch(err){
        return res.status(400).json({ message: "something went wrong", result: err.message })

    }
}

async function updateRole(req,res) {
    try{
        const id = req.params.id;
        const value = req.body;
        const data = await role.update(value,{
            where:{ id: id}
        });
        return res.status(200).json({ message: "Updated successfully"})
    } catch(err) {
        return res.status(400).json({ message: "something went wrong", result: err.message })
    }
}

async function getAllRole(req,res) {
    try{
        const data = await role.findAll();
        return res.status(200).json({ message: "get role details successfully", result: data })
    } catch(err) {
        return res.status(400).json({ message: "something went wrong", result: err.message })
    }
}
module.exports = { createRole,updateRole,getAllRole } 
