const Todo = require('../models/todo');

const TodoRepository = () => {
    const getAll = async (args = {}) => {
        const result = await Todo.find();
        return result;
    }

    const create = async (args={}) => {
        const result = await Todo.create(args);
        return result
    }   


     const updateTodo = async (args={}) => {
        const result = await Todo.findByIdAndUpdate(args._id, { $set: { ...args }});
        return result 
    }   

     const deleteTodo = async (args={}) => {
        const result = await Todo.findByIdAndDelete(args);
       return result;
     }

    return {
        getAll,
        create,
        updateTodo,
        deleteTodo
    }
};

module.exports = TodoRepository;
