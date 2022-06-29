import { useState } from "react"
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

const PostContainer:React.FC = () =>{
    const [limit, setLimit] = useState(10)
    const {data:posts, isLoading} = postAPI.useFetchAllPostsQuery(limit)
    return(
        <div>
            {isLoading && <h1>Loading...</h1>}
            {posts?.map(post=><PostItem key ={post.id} post = {post}/>)}
        </div>
    )
}

export default PostContainer