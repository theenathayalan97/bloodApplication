const db = require("../Db/db.config");
const { use } = require("../router/router");

const user = db.user;

async function create(req, res) {
    try {
        let value = req.body
        let data = await user.create(value);
        return res.status(200).json({ message: "create successfully", result: data })
    } catch (error) {
        return res.status(400).json({ message: "something went wrong", result: error.message })

    }

}

async function updateUser(req, res) {
    try {
        let id = req.params.id;
        let value = req.body;
        let data = await user.update(value, { where: {id: id}
        });
        return res.status(200).json({ message: "Updated successfully"})
    } catch (error) {
        return res.status(400).json({ message: "something went wrong", result: error.message })

    }

}

async function getUser(req,res) {
    try{
        const data = await user.findAll();
        return res.status(200).json({ message: "Get user details successfully", result: data})
    } catch(err) {
        return res.status(400).json({ message: "something went wrong", result: err.message })
    }
}

async function getUserByID(req,res) {
    try {
        const id = req.params.id;
        const data = await user.findByPk(id);
        return res.status(200).json({ message: "Get user details successfully", result: data})
    } catch(error) {
        return res.status(400).json({ message: "something went wrong", result: err.message })
    }
}

module.exports = { create,updateUser,getUser,getUserByID } 
