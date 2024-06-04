"use client"
import { Icon } from "@iconify/react/dist/iconify.js"

const ParentState = ()=>{
    return (
        <div className="group flex flex-col bg-white p-4 rounded-md max-w-80 hover:bg-blue-400">
            <div className="flex flex-row justify-start items-center">
                <Icon icon="ic:baseline-bookmark-add" className="group-hover:text-white"></Icon>
                <p className="group-hover:text-white">New Project</p>
            </div>
            <p className="text-defaut-500 group-hover:text-white">Create a new project from a variety of starting templates.</p>
        </div>
    )
}
export default ParentState