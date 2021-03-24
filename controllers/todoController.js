const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');
const ObjectID =require('mongodb').ObjectID;
exports.todolist = async function (req, res) {
  const { payload } = req;
  const todolist= await Todo.find({creater:req.payload.id});
   return res.status(200).json({
     todolist: todolist
 });
}

exports.todolist_add = async function (req, res) {
const { payload } = req;
const { body: { todo } } = req;
    if(!todo.title) {
      return res.status(400).json({
          message: {
          title: 'Заголовок обязателен',
        },
      });
    }
    if(todo.desc){
      if((todo.desc).length<1) {
        return res.status(400).json({
            message: {
              desc: 'Слишком мало символов',
            },
          });
      }
      if((todo.desc).length>=100) {
        return res.status(400).json({
            message: {
              desc: 'Слишком много символов',
            },
          });
      }
     }
    if((todo.title).length<1) {
      return res.status(400).json({
          message: {
            title: 'Слишком мало символов',
          },
        });
    }
    if((todo.title).length>=41) {
      return res.status(400).json({
          message: {
            title: 'Слишком много символов',
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
   const todolist= await Todo.find({creater:req.payload.id});
   return res.status(201).json({
    todolist: todolist
});
    }
}

exports.todolist_delete = async function (req, res) {
  const { payload: { id } } = req; 
  const todoCheck = await Todo.findById({_id: req.body.id});
  if(todoCheck && req.payload.id===todoCheck.creater){
      await Todo.deleteOne({_id: req.body.id});
      const todolist = await Todo.find({creater:req.payload.id});
      return res.status(200).json({
        todolist: todolist
      });
  }
  return res.status(404).json({
      message: 'Задача не найдена'
  });
}

exports.todolist_comp = async function (req, res) {
  const { payload: { data } } = req;
  const todoCheck = await Todo.findById({_id: req.body.data.id});
  if(todoCheck && req.payload.id === todoCheck.creater){
      const upd = await Todo.updateOne({_id: req.body.data.id},{$set:{completed: req.body.data.completed}})
      const todolist = await Todo.find({creater:req.payload.id});
      return res.status(200).json({
        todolist: todolist
      });
  }
  return res.status(404).json({
      message: 'Задача не найдена'
  });
}

exports.todolist_change = async function (req, res) {
  const { payload: { data } } = req;
  const todoCheck = await Todo.findById({_id: req.body.data.id});
  if(todoCheck && req.payload.id === todoCheck.creater){
      const upd = await Todo.updateOne({_id: req.body.data.id},{$set:{title: req.body.data.title, desc: req.body.data.desc}});
      const todolist = await Todo.find({creater:req.payload.id});
      return res.status(200).json({
        todolist: todolist
      });
  }
  return res.status(404).json({
      message: 'Задача не найдена'
  });
}