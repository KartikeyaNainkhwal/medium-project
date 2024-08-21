import { Link } from "react-router-dom";


interface Blogcompoprops{
    title:string;
    content:string;
    authorname:string;
    publishedDate:string;
    id:number;
}


export const Blogcompo =({title,content,authorname,publishedDate,id}:Blogcompoprops)=>{
    return(  <Link to={`/blog/${id}`}>
        <div className="m-5 w-5/6 ">
            <div className="flex-col justify-center cursor-pointer">
           <div className="flex ">
               <div className="flex flex-col justify-center"><Avatar name={authorname} size={6}></Avatar></div> 
               <div className="flex flex-col justify-center font-medium text-lg ml-3 ">{authorname}</div> 
               <div className="flex flex-col justify-center pl-1"><div className="w-1 h-1 bg-slate-600 rounded-full "></div></div>
               <div className="flex flex-col justify-center font-normal text-slate-600 pl-1 text-lg">{publishedDate}</div>
           </div>
           </div>
           <div className="text-black font-bold text-2xl font-sans">
             {title}
           </div>
           <div className="text-slate-800 font-medium text-lg m-2">
                {content.length>=300? content.slice(0,300) +"..." : content} 
           </div>
           <div className="mt-2 font-normal text-slate-600">
                {Math.ceil(content.length/100)+" minute(s) read"}
           </div>
           <div className="bg-slate-300 h-0.5 w-full mt-3">

           </div>
        </div>
        </Link>
    )
}

export function Avatar({name,size=4}:{name:string,size:number}){
    return(
        <div>
            <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>
        </div>
    )
}

