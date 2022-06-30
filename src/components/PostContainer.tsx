import { useState } from "react"
import { IPost } from "../models/IPost"
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

const PostContainer:React.FC = () =>{
    const [limit, setLimit] = useState(100)
    const {data:posts, isLoading} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()

    const handleCreate = async() =>{
        const title = prompt('Enter post title');
        const body = prompt('Enter post body');
        await createPost({title: title, body: body}as IPost)
    }

    const handleUpdate = (post: IPost) =>{
        updatePost(post)
    }

    const handleDelete = (post:IPost) =>{
        deletePost(post);
    }

    return(
        <div>
            <button onClick={handleCreate}>Add new Post</button>
            {isLoading && <h1>Loading...</h1>}
            {posts?.map(post=><PostItem update= {handleUpdate} remove={handleDelete} key ={post.id} post = {post}/>)}
        </div>
    )
}

export default PostContainer