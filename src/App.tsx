import React, { useEffect } from 'react';
import './App.scss';
import PhotosList from './components/PhotosList';
import PostContainer from './components/PostContainer';
import PostList from './components/PostList';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchPhotos, fetchTodos, fetchUsers } from './store/reducers/ActionCreators';

function App() {

  const dispatch = useAppDispatch();
  const {users, error,isLoading} = useAppSelector(state=>state.userReducer);
  const {todos, todoError,todoIsLoading} = useAppSelector(state=>state.todoReducer);
  // const {posts,postIsLoading,postError} = useAppSelector(state=>state.postReducer);
  const {photos,photoIsLoadind,photoError} = useAppSelector(state=>state.photoReducer);

  useEffect(()=>{
    dispatch(fetchUsers())
    dispatch(fetchTodos())
    dispatch(fetchPhotos())
  },[])

  if(isLoading || todoIsLoading  || photoIsLoadind){
    return <h2>Loading ...</h2>
  }
  if(error || todoError || photoError){
    return <h2>{error}</h2>
  }

  return (
    <div className="App">
        <div>
          {users.map(user=><h3 key={user.id}>{user.name}</h3>)}
        </div>
        
        <div>
        {todos.map(todo => <div>
          <h3>{todo.id} {todo.title}</h3>
          <input type="checkbox" checked ={todo.complited} />
        </div>)}
        </div>
        
        {/* <PostList posts={posts}/> */}
        <PhotosList photos={photos}/>
        <PostContainer/>
    </div>
  );
}

export default App;
