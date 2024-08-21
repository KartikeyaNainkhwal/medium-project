import { Appbar } from "./Appbar";
import { Blog } from "../hooks";
import { Avatar } from "./Blogcomponent";


export const FullBlog= ({blog}:{blog:Blog})=>{
    return <div>
        <Appbar></Appbar>
        <div className="flex justify-center pt-3">
            <div className="grid grid-cols-12 w-5/6"> 
                <div className="col-span-8 ">
                    <div className="text-5xl font-bold">
                        {blog.title}
                    </div>
                    <div className="text-gray-500 pt-3">
                        publised on 16Aug,2024
                    </div>
                    <div className="font-medium text-slate-800 pt-4">
                        {blog.content}
                    </div>
                </div >
                <div className="col-span-4">

                    <div className="text-slate-600 font-medium ">
                        Author
                    </div>
                    <div className="grid grid-cols-10">
                        <div className="col-span-1 flex flex-col justify-center"><Avatar name={"Anonymous"} size={7}  ></Avatar></div>
                        <div className="col-span-9">
                            <div className="font-bold text-xl">
                                Anonymous
                            </div>
                            <div className="text-slate-700">
                                Random catch about the user what they think about this matter
                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>
        </div>
    </div>
}