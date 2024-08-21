import { useState } from "react";
import { Appbar } from "../components/Appbar"
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
export const Publish=()=>{
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const navigate=useNavigate();

    return <div>
        <div>
            <Appbar></Appbar>
        </div>
        <div className="flex justify-center">
        <div className="w-4/6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
            <input onChange={(e)=>{settitle(e.target.value)}} type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required />
        </div>
        </div>
        <div className="flex justify-center">
            <div className="w-4/6" >
                        
                <form>
                <div className="w-full mb-4 border border-gray-20 rounded-lg mt-4 ">
                    <div className="px-4 py-2 bg-white rounded-b-lg ">
                        <label  className="sr-only">Publish post</label>
                        <textarea onChange={(e)=>{setdescription(e.target.value)}} id="editor" rows="8" className="block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0 text-black dark:placeholder-gray-400" placeholder="Write an article..." required ></textarea>
                    </div>
                </div>
              
                <button onClick={async()=>{
                    const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content:description
                    },{
                        headers:{
                            Authorization:localStorage.getItem("token")
                        }
                    });

                    await navigate(`/blog/${response.data.id}`);
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
                </form>

            </div>
        </div>
    </div>
}