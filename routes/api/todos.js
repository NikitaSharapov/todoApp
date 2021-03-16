const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');
const ObjectID =require('mongodb').ObjectID;
const router = require('express').Router();
const auth = require('../auth');
const passport = require('passport');


// запрос на просмотр задач 
router.get('/todolist',auth.required, async(req,res)=>{
      const { payload } = req;
      console.log(req);
     const todolist= await Todo.find({creater:req.payload.id});
      return res.status(200).json({
        todolist: todolist
    });
    }
);


// запрос на добавление задачи 
router.post('/todolist/add',auth.required, async (req,res)=>{
  const { payload } = req;
  const { body: { todo } } = req;
      if(!todo.title) {
        return res.status(200).json({
            message: {
            title: 'Заголовок обязателен',
          },
        });
      }
      if((todo.title).length<1) {
        return res.status(200).json({
            message: {
              title: 'Слишком мало символов',
            },
          });
      }
      if((todo.title).length>=41) {
        return res.status(200).json({
            message: {
              title: 'Слишком много символов',
            },
          });
      }
      if((todo.desc).length<1) {
        return res.status(200).json({
            message: {
              desc: 'Слишком мало символов',
            },
          });
      }
      if((todo.desc).length>=100) {
        return res.status(200).json({
            message: {
              desc: 'Слишком много символов',
            },
          });
      }
      else{
           const newTodo = await new Todo({
            title: todo.title,
            desc: todo.desc,
            creater:req.payload.id
     });
     await newTodo.save();
        return res.status(200).json({
            message: 'Задача добавлена'
        });
      }
})

//запрос на удаление
router.delete('/todolist/delete/:id',auth.required, async (req,res)=>{
    const { payload: { id } } = req;
    createrCheck =await Room.find({creater:id});
    userCheck =await Room.find({userId:id});
    if(createrCheck.length == 0 && userCheck.length == 0 ){
      return res.status(401).json({
          message: 'Ошибка доступа',
      });
    }        
    const idCheck = await Todo.findOne({_id: ObjectID(req.params.id)});
    if(idCheck){
        return await Todo.deleteOne({_id: ObjectID(req.params.id)}),res.status(200).json({
            message: 'Задача удалена'
        });
    }
    return res.status(200).json({
        message: 'Задача не найдена'
    });
 
})

module.exports = router;