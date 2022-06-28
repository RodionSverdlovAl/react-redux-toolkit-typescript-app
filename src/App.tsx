import React, { useEffect } from 'react';
import './App.css';
import PostList from './components/PostList';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchPosts, fetchTodos, fetchUsers } from './store/reducers/ActionCreators';

function App() {

  const dispatch = useAppDispatch();
  const {users, error,isLoading} = useAppSelector(state=>state.userReducer);
  const {todos, todoError,todoIsLoading} = useAppSelector(state=>state.todoReducer);
  const {posts,postIsLoading,postError} = useAppSelector(state=>state.postReducer);

  useEffect(()=>{
    dispatch(fetchUsers())
    dispatch(fetchTodos())
    dispatch(fetchPosts())
  },[])

  if(isLoading || todoIsLoading || postIsLoading){
    return <h2>Loading ...</h2>
  }
  if(error || todoError || postError){
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
        <PostList posts={posts}/>
    </div>
  );
}

export default App;
