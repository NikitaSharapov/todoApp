//регистрация и авторизация пользователя
const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const User = mongoose.model('User');
const auth = require('../auth');
const ObjectID =require('mongodb').ObjectID;


//Запрос на регистрацию нового пользователя
router.post('/signup', auth.optional, async (req, res, next) => {
  const { body: { user } } = req; 
  const oldUser = await User.findOne({login: user.login});
  if(oldUser){
    return res.status(400).json({
       message: 'Логин уже существует',
     });
  }
  if(!user.login) {
    return res.status(400).json({
        message: 'Требуется логин',
    });
  }
  if((user.login).length<1) {
    return res.status(400).json({
      message: 'Логин слишком короткий',
  });
  }
  if((user.login).length>20) {
    return res.status(400).json({
      message: 'Логин слишком большой',
  });
  }
  if(!user.password) {
    return res.status(400).json({
      message: 'Требуется пароль',
  });
  }
  if((user.password).length>20) {
    return res.status(400).json({
      message: 'Пароль слишком большой',
  });
  }
  if((user.password).length<4) {
    return res.status(400).json({
      message: 'Пароль слишком маленький',
  });
  }
  if(!(user.email).includes('@')) {
    return res.status(400).json({
      message: 'Некорректный эль. адрес',
  });
  }

  if(!(user.email).includes('.')) {
    return res.status(400).json({
      message: 'Некорректный эль. адрес',
  });
  }
  if((user.email).length>30) {
    return res.status(400).json({
      message: 'Эль. адрес слишком большой',
  });
  }
  else{
    const finalUser = new User(user);
    finalUser.setPassword(user.password);
      return finalUser.save()
    .then(() => res.status(201).json({ token: finalUser.toAuthJSON().token }));
}

});

//POST login route (optional, everyone has access)
//запрос на авторизацию
router.post('/signin', auth.optional, (req, res, next) => {
  const { body: { user } } = req;
  if(!user.login) {
    return res.status(401).json({
      message: 'Ошибка авторизации',
  });
  }
  if(!user.password) {
    return res.status(401).json({
      message: 'Ошибка авторизации',  
  });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return res.status(401).json({
        message: 'Ошибка авторизации',
    }); 
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ token: user.toAuthJSON().token });
    }

    return res.status(401).json({
      message: 'Ошибка авторизации',
  });
  })(req, res, next);
});

//запрос на удаление авторизованного пользователя
router.delete('/delete', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return User.findOneAndRemove({_id:id})
    .then((user) => {
      if(!user) {
        return res.status(404).json({
          message: 'Пользователь не найден',
      });
      }
      
      return res.status(410).json({
        message: 'Пользователь удалён',
    }),req.logout(); ///вопрлс логаута
    });
});

module.exports = router;