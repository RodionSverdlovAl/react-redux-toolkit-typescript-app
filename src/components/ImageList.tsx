import { useState } from "react"
import { IImages } from "../models/IImages"
import { postAPI } from "../services/PostService"
import ImageForm from "./ImageForm"



const ImageList:React.FC = () =>{
    const [limit, setLimit] = useState(100)
    const {data:images, isLoading} = postAPI.useFetchAllImagesQuery(limit);
    const [deleteImage, {}] = postAPI.useDeleteImageMutation();

    const handleDelete = (img: IImages) =>{
        deleteImage(img);
    }

    return(
        <div>
            <ImageForm/>
            {images?.map(img=>
            <div>
                <img src={img.src} width={200}></img>
                {img.title}
                <button onClick={()=>handleDelete(img)}>Delete</button>
             </div>)}
        </div>
    )
}

export default ImageList