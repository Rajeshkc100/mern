const TodoRepository = require("../repository/todoRepository")();

const TodoService = () => {
    const getAll = async (args={}) => {
        let result = await TodoRepository.getAll(args);
        return result
    }

    const create = async (args={}) => {
        let result = await TodoRepository.create(args);
        return result;
    }

    const updateTodo = async (args={}) => {
        let result = await TodoRepository.updateTodo(args);
        return result;
    }

     const deleteTodo = async (args={}) => {
        const result = await TodoRepository.deleteTodo(args);

        return result;
     }

    return {
        getAll,
        create,
        updateTodo,
        deleteTodo
    }
}

module.exports = TodoService;