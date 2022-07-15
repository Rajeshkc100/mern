const UserService = require('../services/userService')();

const UserController = () => {
    const getUser = async (req, res, next) => {
        const result = await UserService.getUser(req.body);
        return res.send({
            data: result
        })
    }

    const createUser = async (req, res, next) => {
        const result = await UserService.createUser(req.body);
        res.status(200).send({
            data: result
        })
    }

    const updateUser = async (req, res, next) => {
        const result = await UserService.updateUser(req.body);
        res.status(200).send({
            data: result
        })
    }

    const deleteUser = async (req, res, next) => {
        const result = await UserService.deleteUser(req.body);
        res.status(200).send({
            data: result
        })
    }

    return {
        getUser,
        createUser,
        updateUser,
        deleteUser
    }
}

module.exports = UserController;