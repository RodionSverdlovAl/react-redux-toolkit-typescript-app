import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IImages } from '../models/IImages'
import { IPost } from '../models/IPost'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    tagTypes: ['Post','Image'],
    endpoints:(build)=>({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit:number =5)=>({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result =>['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post)=>({
                url: '/posts',
                method: "POST",
                body: post,
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post)=>({
                url: `/posts/${post.id}`,
                method: "PUT",
                body: post,
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post)=>({
                url: `/posts/${post.id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Post']
        }),
        fetchAllImages: build.query<IImages[], number>({
            query: (limit:number =5)=>({
                url: '/images',
                params:{
                    _limit:limit
                }
            }),
            providesTags: result => ['Image']
        }),
        createImage: build.mutation<IImages, IImages>({
            query: (image)=>({
                url: '/images',
                method: "POST",
                body: image,
            }),
            invalidatesTags: ['Image']
        }),
        deleteImage: build.mutation<IImages, IImages>({
            query: (image)=>({
                url: `/images/${image.id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Image']
        }),
    })
})