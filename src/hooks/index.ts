import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
export interface Blog{
    "content": string,
    "title": string,
    "id": number,
    "author": {
        "name": string
    }
}

export const useBlog=({id}:{id:string})=>{
    const [loading,setloading]=useState(false);
    const [blog,setBlog]=useState<Blog>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
            .then(response=>{
                setBlog(response.data.blog);
                setloading(false); 
            })
    },[id])

    return({
        loading,
        blog
    })
}

export const useBlogs=()=>{
    const [loading,setloading]=useState(false);
    const [blogs,setblogs]=useState<Blog>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
            .then(response=>{
                setblogs(response.data.blogs);
                setloading(false); 
            })
    })

    return({
        loading,
        blogs
    })
}