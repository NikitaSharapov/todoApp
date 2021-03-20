const router = require('express').Router();
const auth = require('../auth');

const todoController = require('../../controllers/todoController')

// запрос на просмотр задач 
router.get('/todolist', auth.required, todoController.todolist );

// запрос на добавление задачи 
router.post('/todolist/add',auth.required, todoController.todolist_add);

//запрос на удаление
router.delete('/todolist/delete/:id',auth.required, todoController.todolist_delete)

module.exports = router;