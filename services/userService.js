const UserRepository = require('../repository/userRepository')();

const UserService = () => {
    const getUser = async (args={}) => {
        const result = await UserRepository.getUser(args);
        return result;
    }

    const createUser = async (args={}) => {
        const result = await UserRepository.createUser(args);
        return result;
    }

     const updateUser = async (args={}) => {
        const result = await UserRepository.updateUser(args);
        return result;
    }

    const deleteUser = async (args={}) => {
        const result = await UserRepository.deleteUser(args);
        return result;
    }

    return {
        getUser,
        createUser,
        updateUser,
        deleteUser
    }
}

module.exports = UserService;