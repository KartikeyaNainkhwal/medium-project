import { Appbar } from "../components/Appbar"
import { Blogcompo } from "../components/Blogcomponent"
import { BlogSkeleton } from "../components/Blogskeleton.tsx";
import { useBlogs} from '../hooks/index.ts'


export const Blogs=()=>{
    const {loading,blogs} =useBlogs();
    if(loading){
        return(
            <div>
                <Appbar></Appbar>
                <div className="flex justify-center">
                    <BlogSkeleton></BlogSkeleton>
                </div>
            </div>
        )
    }
    return(
        <div>
        <Appbar></Appbar>
        <div className=" flex justify-center ">
            <div className="  w-6/12">
               { blogs.map((blogs)=><Blogcompo
                    id={blogs.id}
                    authorname={blogs.author.name}
                    title={blogs.title}
                    content={blogs.content}
                    publishedDate="22 Aug 2024"


                />)}
                    
            </div>
            
        </div>
        </div> 
    )
}