import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { fetchLoadTodoList } from '../../store/actions/loadTodoList';


export const Load: React.FC = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useContext(AuthContext);
  console.log(auth.token);
  if(auth.token){
    dispatch(fetchLoadTodoList());
    history.push('/app');
  }
  else{
    history.push('/auth');
  }
  return (
    <> загрузка</>
  )
}