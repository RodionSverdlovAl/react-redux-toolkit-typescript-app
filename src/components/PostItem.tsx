import { IPost } from "../models/IPost"

interface PostItemProps{
    post: IPost;
}

const PostItem:React.FC<PostItemProps> =({post}) =>{
    return(
        <div>
            <h3>{post.id} {post.title}</h3>
            <p>{post.body}</p>
            <button>Delete</button>

        </div>
    )
}

export default PostItem