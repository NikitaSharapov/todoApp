import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../..'; 
import { FormButton, GreySubmitFormButton, SubmitFormButton, WhiteFormButton } from '../../general/button';
import { ErrorTitle, FormTitle } from '../../general/title';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import config from '../../../config';
import { useHttp } from '../../../utils/hooks/http.hook';
import { AuthContext } from '../../../context/authContext';
import { useDispatch } from 'react-redux';
import { fetchDeleteTodo } from '../../../store/actions/deleteTodo';
import { fetchChangeTodo } from '../../../store/actions/changeTodo';

const FormContent = styled.form`
  display:grid;
  align-items: center;
  width: 280px;
  justify-self: center;
`

const FormNavButton = styled.div`
  display:grid;
  grid-template:1fr/1fr 2fr;
  column-gap: 10px;
`

const Input = styled.input`
  height: 50px;
  border: none;
  margin-bottom: 10px;
  padding-left: 14px;
  font-size: 14px;
  border-radius: 5px;
`

interface IFormlayout {
  height: number;
}

export const FormlayoutContent = styled.div<IFormlayout>`
  display:grid;
  grid-template:1fr/1fr;
  align-items: center;
  justify-content: center;
  height: ${props => props.height+'px' || '100vh'};
`

export const Formlayout: React.FC<IFormlayout> = (props) => {
  return (
    <FormlayoutContent {...props}>
      {props.children}
    </FormlayoutContent>
  )
}

const TextArea = styled.textarea`
  height: 300px;
  border: none;
  margin-bottom: 10px;
  padding-top: 14px;
  padding-left: 14px;
  font-size: 14px;
  border-radius: 5px;
  background: #F7F6F6;
  border-radius: 5px;
`


interface IFormContainer {
  height: number,
  title: string,
  desc: string,
  id: string,
  close: ()=> void,
}

const FormContainer = styled.div<IFormContainer>`
  display:grid;
  grid-template:1fr/1fr;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  -moz-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);


`

const TodoItemInput = styled.input`
  height: 50px;
  border: none;
  margin-bottom: 10px;
  padding-left: 14px;
  font-size: 14px;
  background: #F7F6F6;
  border-radius: 5px;
`

const TodoItemFormContent = styled.form`
  display:grid;
  align-items: center;
  width: 450px;
  justify-self: center;
  @media ${props =>media.desktop550}{
    width:100%;
  } 
`

interface InputsAuth {
  login: string,
  pass: string,
}

const AuthFormSchema = yup.object().shape({
  login: yup.string().required('Это обязательное поле'),
  pass: yup.string().required('Это обязательное поле'),
});

export const AuthForm: React.FC = (props) =>{
  const auth = useContext(AuthContext);
  const history = useHistory();
  const {register, handleSubmit, formState: {errors}} = useForm<InputsAuth>({resolver: yupResolver(AuthFormSchema),});
  const {loading, request, error} = useHttp();
  const onSubmit = async (data: InputsAuth) => {
    const formData = {
      user: {
        login: data.login,
        password: data.pass,
      }
    }
    try {
      const data = await request(
        `${config.API_HOST}/api/users/signin/`,
        'POST',
         formData,
      );
      auth.login(data.token);
      history.push('/app');
    } catch (e) {}
  };
  return (
    <>
      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>
          Авторизация
        </FormTitle>
        {error ? <ErrorTitle>{error}</ErrorTitle>: null}
        <Input type="text" placeholder="Введите логин" name="login" ref={register}/>
        {errors.login && <ErrorTitle>{errors.login.message}</ErrorTitle>}
        <Input type="password" placeholder="Введите пароль" name="pass" ref={register} />
        {errors.pass && <ErrorTitle>{errors.pass.message}</ErrorTitle>}
        <FormNavButton>
          <NavLink to="/reg"><WhiteFormButton title={'Регистрация'}/></NavLink>
          <SubmitFormButton type="submit" value="Подтвердить" disabled={loading} />
        </FormNavButton>
      </FormContent>
    </>
  )
}

interface InputsReg {
  email: string,
  login: string,
  pass: string,
}

const RegFormSchema = yup.object().shape({
  email: yup.string().required('Это обязательное поле').min(5, 'Слишком мало символов').max(30, 'Превышен лимит символов'),
  login: yup.string().required('Это обязательное поле').max(20, 'Превышен лимит символов'),
  pass: yup.string().required('Это обязательное поле').min(4, 'Слишком мало символов').max(20, 'Превышен лимит символов'),
});

export const RegForm: React.FC = (props) =>{
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm<InputsReg>({resolver: yupResolver(RegFormSchema),});
  const {loading, request, error} = useHttp();
  const onSubmit = async (data: InputsReg) => {
    const formData = {
      user: {
        login: data.login,
        email: data.email,
        password: data.pass,
      }
    }
    try {
      const data = await request(
        config.API_HOST + '/api/users/signup/',
        'POST',
         formData, 
      );
      auth.login(data.token);
      history.push('/app');
    } catch (e) {}
    
  };
  return (
    <>
      <FormContent onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>
            Регистрация
          </FormTitle>
          {error ? <ErrorTitle>{error}</ErrorTitle>: null}
          <Input type="text" placeholder="Введите эль. почту" name="email" ref={register} />
          {errors.email && <ErrorTitle>{errors.email.message}</ErrorTitle>}  
          <Input type="text" placeholder="Введите логин" name="login" ref={register}/>
          {errors.login && <ErrorTitle>{errors.login.message}</ErrorTitle>}
          <Input type="password" placeholder="Введите пароль" name="pass" ref={register}/>
          {errors.pass && <ErrorTitle>{errors.pass.message}</ErrorTitle>}
          <FormNavButton>
            <NavLink to="/auth"><WhiteFormButton title={'Авторизация'}/></NavLink>
            <SubmitFormButton type="submit" value="Подтвердить" disabled={loading}/>
          </FormNavButton>
      </FormContent>
    </>
  )
}

const TodoItemFormSchema = yup.object().shape({
  title: yup.string().required('Это обязательное поле').max(20, 'Превышен лимит символов'),
  desc: yup.string().max(200, 'Превышен лимит символов'),
});
interface InputsTodoItemForm {
  title: string,
  desc: string,
}
export const TodoItemForm: React.FC<IFormContainer> = (props) =>{
  const { register, handleSubmit, setValue } = useForm<InputsTodoItemForm>({resolver: yupResolver(TodoItemFormSchema),});
  const dispatch = useDispatch();
  useEffect(() => {
    setValue('title', props.title);
    setValue('desc', props.desc);
  })
  const onSubmit = async (data: InputsTodoItemForm) => {
    const formData = {
      data: {
        id: props.id,
        title: data.title,
        desc: data.desc,
      }
    }
    dispatch(fetchChangeTodo(formData));
    props.close();
  };
  const handlerDelete = () => {
    const formData = {
      id: props.id,
    }
    dispatch(fetchDeleteTodo(formData));
  };
  return (
    <FormContainer {...props} key={props.id}>
      <TodoItemFormContent onSubmit={handleSubmit(onSubmit)}>
        <TodoItemInput type="text" name="title" ref={register} placeholder="Заголовок задачи"/>
        <TextArea placeholder="Описание задачи" name="desc" ref={register}/>
        <FormNavButton>
          <FormButton title={'Удалить'} onClick={handlerDelete}/>
          <GreySubmitFormButton type="submit" value="Подтвердить" />
        </FormNavButton>
      </TodoItemFormContent>
    </FormContainer>
  )
}

