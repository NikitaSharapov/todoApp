//модель для добавление в базу задач
const {Schema, model} = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength:[1, 'too few letters'],
        default: "Заголовок задачи",
        maxlength:[40, 'too more letters'],
    },
    desc: {
        type: String,
        default: "Описание задачи",
        minlength:[1, 'too few letters'],
        maxlength:[200, 'too more letters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
    creater: {
        type: String,
        required: true, 
    },
});

module.exports = model('Todo',todoSchema);
