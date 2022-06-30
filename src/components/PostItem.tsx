import { IPost } from "../models/IPost"

interface PostItemProps{
    post: IPost;
    remove: (post: IPost)=> void;
    update: (post: IPost)=> void;
}

const PostItem:React.FC<PostItemProps> =({post, remove, update}) =>{

    const handleUpdate=()=>{
        const title = prompt('Enter new title') || "";
        update({...post, title})
    }
    

    return(
        <div>
            <h3>{post.id} {post.title}</h3>
            <p>{post.body}</p>
            <button onClick={()=>remove(post)}>Delete</button>
            <button onClick={handleUpdate}>Update</button>

        </div>
    )
}

export default PostItem