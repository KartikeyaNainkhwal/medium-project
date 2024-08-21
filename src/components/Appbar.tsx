import { Link } from "react-router-dom"
export const Appbar=()=>{
    return(
        <div className="flex justify-between w-full border-b px-14 ">
            <Link to={'/blogs'}>
                <div className="text-lg flex flex-col justify-center h-14"> Medium</div>
            </Link>
            <div className="flex">
                <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-7 py-2  text-center  my-2 mx-7 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">new</button>

                </Link>
                <div className="flex flex-col justify-center">
                    <div className={`relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
                    <span className="font-medium text-gray-600 dark:text-gray-300">K</span></div>
                </div>
            </div>
            
        </div>
    )
}