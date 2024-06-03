'use client'
import Horizontal from "./Horizontal"

const Hover = () => {
    return (
        <>
            <div>
                <Horizontal/>
                <button className={"bg-blue-500 text-white font-medium rounded-3xl py-1 px-2 hover:bg-blue-900"}>Save
                    changes
                </button>
                {/*active:按下时触发*/}
                <button
                    className={"bg-purple-500 text-white font-medium rounded-3xl py-1 px-2 hover:bg-purple-900 active:bg-red-700"}>Save
                    changes
                </button>
            </div>
        </>
    )
}
export default Hover