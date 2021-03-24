//подключение модулей
const express = require('express');
const mongoose  = require('mongoose');
const { error } = require('console');
const path = require('path');
const bodyParser = require('body-parser');
const User = require('./models/user');
const Todo = require('./models/todo');
const session = require('express-session');
const passportConf = require('./config/passport');
const morgan = require('morgan');
const keys= require('./config/keys')
const cors = require('cors');
const passport  = require('passport');
//инициализация приложения
const app = express();

//Порт
const PORT = process.env.PORT || keys.port;

//настройки приложения
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./routes'));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(err.status).send({
            message: 'Ошибка авторизации',
        });
        return;
    }
    next(err);
});
app.use(function (req, res) {
    res.send(404, "Page not found")
});
app.use(session({ secret: 'word', cookie: { maxAge: 10 * 60 * 1000 }, resave: true, saveUninitialized: false })); //сессия

//подключение сервера
async function start(){
    try {
        await mongoose.connect(keys.mongoDBUrl,{
            useCreateIndex: true, 
            useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser:true,
        })
        .then(()=>console.log("DB connected"))
        .catch(error =>console.log(error));
        app.listen(PORT, () =>{
            console.log(`Server started on port ${PORT}`);
        });

    } catch (e) {
        console.log("Server can`t start");
        console.log(e);
    }
}
start();