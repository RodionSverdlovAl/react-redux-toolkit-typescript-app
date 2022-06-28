import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchTodos, fetchUsers } from './store/reducers/ActionCreators';

function App() {

  const dispatch = useAppDispatch();
  const {users, error,isLoading} = useAppSelector(state=>state.userReducer);
  const {todos, todoError,todoIsLoading} = useAppSelector(state=>state.todoReducer)
  useEffect(()=>{
    dispatch(fetchUsers())
    dispatch(fetchTodos())
  },[])

  if(isLoading || todoIsLoading){
    return <h2>Loading ...</h2>
  }
  if(error || todoError){
    return <h2>{error}</h2>
  }

  return (
    <div className="App">
        working....
        {users.map(user=><h3 key={user.id}>{user.name}</h3>)}
        {todos.map(todo => <div>
          <h3>{todo.id} {todo.title}</h3>
          <input type="checkbox" checked ={todo.complited} />
        </div>)}
    </div>
  );
}

export default App;
