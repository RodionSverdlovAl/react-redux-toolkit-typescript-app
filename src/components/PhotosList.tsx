import { IPhoto } from "../models/IPhoto"

interface PhotosListProps {
    photos: IPhoto[]
}


const PhotosList:React.FC<PhotosListProps> = ({photos}) =>{
    return(
        <div className="photos_list">
            {photos.map(photo=><div key={photo.id} className="photoItem">
                <img src={photo.thumbnailUrl} alt="" />
                <p>{photo.title}</p>
            </div>)}
        </div>
    )
}

export default PhotosList