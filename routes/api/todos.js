const router = require('express').Router();
const auth = require('../auth');

const todoController = require('../../controllers/todoController')

// запрос на просмотр задач 
router.get('/todolist', auth.required, todoController.todolist );

// запрос на добавление задачи 
router.post('/todolist/add',auth.required, todoController.todolist_add);

// запрос на изменение состояния 
router.post('/todolist/comp',auth.required, todoController.todolist_comp);

// запрос на изменение состояния 
router.post('/todolist/change',auth.required, todoController.todolist_change);

//запрос на удаление
router.post('/todolist/delete',auth.required, todoController.todolist_delete)

module.exports = router;