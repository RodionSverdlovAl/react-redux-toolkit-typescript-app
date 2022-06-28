import { IPost } from "../models/IPost"

interface PostListProps {
    posts: IPost[];
}

const PostList:React.FC<PostListProps> = ({posts}) =>{
    return(
        <div>
            {posts.map(post=><div className="post_item">
                <h3>{post.id} {post.title}</h3>
                <p>{post.body}</p>
            </div>)}
        </div>
    )
}

export default PostList