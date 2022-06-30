import { useState } from "react"
import { IImages } from "../models/IImages";
import { postAPI } from "../services/PostService";

const ImageForm:React.FC = () =>{
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [create, {}] = postAPI.useCreateImageMutation();

    const createPost = async()=>{
       await create({title:title, src:url} as IImages)
    }

    return(
        <div>
            <p>enter title</p>
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
            <p>enter image url</p>
            <input type="text" value={url} onChange={e=>setUrl(e.target.value)}/>
            <button onClick={createPost}>add new image</button>
        </div>
    )
}

export default ImageForm