import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {  GreySubmitFormButton, PhoneFormButton } from '../../general/button';
import { EmptyTitle, ItemTitle, Title } from '../../general/title';
import { BiCheck, BiTrash } from "react-icons/bi";
import { Scrollbar } from "react-scrollbars-custom";
import { media } from '../../..';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { fetchAddTodo } from '../../../store/actions/addTodo';
import { useDispatch, useSelector } from 'react-redux';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Popup from 'reactjs-popup';
import { TodoItemForm } from '../form';
import { fetchDeleteTodo } from '../../../store/actions/deleteTodo';
import { fetchComplateTodo } from '../../../store/actions/completeTodo';
import { IRootState } from '../../../store/types/store';

const TodoContainer = styled.div`
  padding-top: 50px;
  width:990px;
  display:grid;
  grid-template:1fr /1fr;
  justify-self: center;
  margin: 0 auto;
  @media ${props =>media.desktop1000}{
    width: 100%;
  } 
`

const TodoList = styled.div`
  display:grid;
  justify-content: center;
  @media ${props =>media.desktop1000}{
    display: block;
    
  }
`

const TodoAddContainer = styled.form`
  width: 750px;
  margin:10px 0;
  display:grid;
  grid-template:1fr /3fr 1fr;
  column-gap: 20px;
  justify-self: center;
  @media ${props =>media.desktop1340}{
    width: 550px;
  }
  @media ${props =>media.desktop1000}{
    width: 450px;
  }
`

const TodoItemContainer = styled.div`
  width:950px;
  display:grid;
  grid-template:1fr/50px 3fr 50px;
  justify-items: center;
  align-items: center;
  height:auto;
  background: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  -moz-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  word-wrap: break-word;
  @media ${props =>media.desktop1000}{
    width: auto;
    margin: 0 10px 10px 10px;
  }
`

interface IAppTodoList {
  height: number;
}
let todolistArray: any[] = [];

export const AppTodoList: React.FC<IAppTodoList> = (props) => {
  const todolist = useSelector((state: IRootState) => state.loadTodoList.todolist);
  if(todolist){
    todolistArray = Object.values(todolist);
  }
  return (
    <TodoContainer>
      <Title title={'Список задач'} />
      <Scrollbar style={{ height: props.height-220 }}>
      <TodoList>
      {todolistArray.map((item) => {
            if(item.length === 0){
              return (<EmptyTitle>Пусто :(</EmptyTitle>)
            }
            else{
              const todoItem = Object.values(item);
              return todoItem.map((item: any)=>{
              return (<TodoItem key={item._id} id={item._id} title={item.title} desc={item.desc} height={props.height- 140} completed={item.completed} />) })
            }
          })}
      </TodoList>
      </Scrollbar>
    </TodoContainer>
  )
}

const FormInput = styled.input`
  font-size:18px;
  padding-left: 17px;
  border: none;
  border-radius: 5px;
  background: #F7F6F6;
`

interface InputsAdd {
  title: string,
}

const TodoAddFormSchema = yup.object().shape({
  title: yup.string().required('Это обязательное поле').min(1, 'Слишком мало символов').max(40, 'Превышен лимит символов'),
});

export const TodoAddForm: React.FC = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue} = useForm<InputsAdd>({resolver: yupResolver(TodoAddFormSchema),});
  const commands = [
    {
      command: 'Создать задачу *',
      callback: (todo: any) => {
        
        const dataVoice = {
          title: todo,
        }
        setMessage(`${todo}`);
        onSubmit({...dataVoice});
      }
    }
  ];
  const {transcript, resetTranscript } = useSpeechRecognition({ commands });
  setValue('title', transcript);
  const [message, setMessage] = useState('');
  const onSubmit = (data: InputsAdd) => {
    console.log('data form on submit ',data);
    const formData = {
      todoItem: {
        todo: {
          title: data.title,
        }
      },
    }
    dispatch((fetchAddTodo(formData)));
    resetTranscript();
    setValue('title', '');
  };
  SpeechRecognition.startListening({ language: 'ru',continuous: true, });

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Ups, your browser is not supported voice control!");
    }  
  }, []);
  return (
    <TodoAddContainer onSubmit={handleSubmit(onSubmit)} >
      <FormInput type="text" placeholder="Введите новую задачу" ref={register} name="title" autoComplete="off" />
      <GreySubmitFormButton  type="submit" value="Подтвердить" />
    </TodoAddContainer>
  )
}

const TodoCheckContainer = styled.div`
  width:20px;
  height:20px;
  border: 1px solid black;
  border-radius: 2px;
  
`

const ItemTitleConteiner = styled.div`
  width: 100%;
  height: 100%;
`

interface ITodoItem {
  title: string;
  height: number;
  desc: string;
  id: string;
  completed: boolean;
}

interface ITodoCheck {
  completed: boolean;
  id: string;
}
const TodoCheck: React.FC<ITodoCheck> = (props) => {
  const dispatch = useDispatch();
  const handlerCompleted = () => {
    let completed = props.completed;
    if(completed === false){
      completed=true;
    }
    else{
      completed=false;
    }
    const formData = {
      data: {
        id: props.id,
        completed: completed,
      }
    }
    dispatch(fetchComplateTodo(formData));
  };
  return (
    <TodoCheckContainer onClick={handlerCompleted}>
      {props.completed===true ? <BiCheck fontSize={20} />: ''}
    </TodoCheckContainer>
  )
}

export const TodoItem: React.FC<ITodoItem> = (props) => {
  const dispatch = useDispatch();
  const handlerDelete = () => {
    const formData = {
      id: props.id,
    }
    dispatch(fetchDeleteTodo(formData));
  };
  return (
    <TodoItemContainer>
      <TodoCheck completed={props.completed} id={props.id}/>
      <Popup modal nested trigger={<ItemTitleConteiner ><ItemTitle title={props.title}  /></ItemTitleConteiner>} position={['center center']} closeOnDocumentClick overlayStyle={{background: 'rgba(0,0,0,.4'}}>
        <TodoItemForm height={props.height} title={props.title} desc={props.desc} key={props.id} id={props.id}/>
      </Popup>
      <BiTrash fontSize={20} onClick={handlerDelete} key={props.id} />
    </TodoItemContainer>
  )
}

const anim = keyframes`
0% {
  transform: scale(1) translateY(0px);
  opacity: 0;
}

100% {
  transform: scale(1) translateY(0px);
  opacity: 1;
}
`;


const PhoneTodoAddContainer = styled.form`
  animation: ${anim} .1s linear;
  padding: 0 10px;
  display:grid;
  grid-template:40px /2fr auto;
  column-gap: 10px;
  justify-self: center;
  align-content: center;
  background: #fff;
  position: fixed;
  bottom: 0;
  left:0;
  right: 0;
  height: 80px;
`

const PhoneFormInput = styled.input`
  font-size:13px;
  padding-left: 17px;
  border: none;
  border-radius: 5px;
  background: #F7F6F6;
`

export const PhoneTodoAddForm: React.FC = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm<InputsAdd>({resolver: yupResolver(TodoAddFormSchema),});
  const onSubmit = (data: InputsAdd) => {
    const formData = {
      todoItem: {
        todo: {
          title: data.title,
        }
      },
    }
    dispatch((fetchAddTodo(formData)));
    setValue('title', '');
  };
  return (
    <PhoneTodoAddContainer onSubmit={handleSubmit(onSubmit)}>
      <PhoneFormInput type="text" placeholder="Введите новую задачу" ref={register} name="title" autoComplete="off" />
      <PhoneFormButton  type="submit" />
    </PhoneTodoAddContainer>
  )
}