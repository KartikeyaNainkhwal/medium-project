import { ChangeEvent, useState } from "react";
import {SignupInput} from "@100xdevs/medium-common"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { BACKEND_URL } from "../config";
export const Auth =({type}:{type:"signup"|"signin"})=>{
    const navigate=useNavigate();
    const [Inputstate,setInputstate]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })
    async function sendrequest(){
      try{ const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type=="signin" ?"signin":"signup"}`,Inputstate);
       const jwt=response.data;
       localStorage.setItem("token",jwt);
       navigate("/blogs")
    }
    catch(e){
        alert("Error while signing in");
    }
    } 
    return(
        <div className="bg-slate-200 h-screen flex justify-center flex-col ">
             
            <div className="justify-center flex border border-bottom-width: 1px; ">
                <div className="">
                    <div className="text-4xl font-bold px-7 border-indigo-500  ">
                        Create an account 
                    </div>
                    <div className="font-normal text-slate-500 pb-4 pt-2 px-12 ">
                    {type=="signin"? "Don't have an account":"Already have an account?"}
                        <Link className="font-normal text-slate-500 underline pl-3" to={type=="signin"?"/signup":"/signin"}>{type=="signin" ?"signup":"signin"} </Link>
                    </div>
                    <LabbeledInput label="Username" text="Enter your username" onChange={(e)=>{
                     setInputstate({
                            ...Inputstate,
                            email:e.target.value
                        })
                    }}  ></LabbeledInput>
                    {type=="signup"?<LabbeledInput label="Name" text="Enter your name" onChange={(e)=>{
                     setInputstate({
                            ...Inputstate,
                            name:e.target.value
                        })
                    }}   ></LabbeledInput>:null}
                    <LabbeledInput label="Password" text="Enter your password" type="password" onChange={(e)=>{
                     setInputstate({
                            ...Inputstate,
                            password:e.target.value
                        })
                    }}   ></LabbeledInput>
                    <button onClick={sendrequest} type="button" className=" text-center mt-5 w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5  items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                     {type=="signin"? "Sign in" :"Sign up"}
                    </button>
                 
                </div>
            </div>
        </div>
    )
}

interface LabbeledType{
    label:string;
    text:string;
    type?:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
}

const LabbeledInput=({label,text,onChange,type}:LabbeledType)=>{
    
    return(
    <div>
        <label className="block mb-2 text-sm font-medium dark:text-black  pt-3">{label}</label>
        <input onChange={onChange} type={type ||"text"}  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder={text} required
          />
    </div>
    )
}