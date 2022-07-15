const TodoService = require("../services/todoService")();

const TodoController = () => {
    const getAll = async (req, res, next) => {
        const result = await TodoService.getAll(req.body);
        res.send({
            data: result
        });
    }

    const create = async (req, res, next) => {
        const result = await TodoService.create(req.body);
        res.status(200).send({
            data: result
        })
    } 

    const updateTodo = async (req, res, next) => {
        const result = await TodoService.updateTodo(req.body);
        res.status(200).send({
            data: result
        })
    }

    const deleteTodo = async (req, res, next) => {
        const result = await TodoService.deleteTodo(req.body);
         res.status(200).send({
            data: result
        })
    }

    return {
        getAll,
        create,
        updateTodo,
        deleteTodo
    };
}

module.exports = TodoController;