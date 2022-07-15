const User = require('../models/user');

const UserRepository = () => {
    const getUser = async () => {
        const result = await User.find()
        return result;
    }

    const createUser = async (args={}) => {
        const result = await User.create(args)
        return result;
    }

    const updateUser = async (args={}) => {
        const result = await User.findByIdAndUpdate(args._id, {$set: {...args}})
        return result;
    }

     const deleteUser = async (args={}) => {
        const result = await User.findByIdAndDelete(args)
        return result;
    }

    return {
        getUser,
        createUser,
        updateUser,
        deleteUser
    }
}

module.exports = UserRepository;