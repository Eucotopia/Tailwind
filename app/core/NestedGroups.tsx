const data = [
    {
        avatar:"https://tailwindcss.com/img/erin-lindford.jpg",
        title:"Leslie Abbott",
        role:"Co-Founder/CEO"
    },
    {
        avatar:"https://tailwindcss.com/img/erin-lindford.jpg",
        title:"Leslie Abbott",
        role:"Co-Founder/CEO"
    },
    {
        avatar:"https://tailwindcss.com/img/erin-lindford.jpg",
        title:"Leslie Abbott",
        role:"Co-Founder/CEO"
    },
]
const NestedGroups = ()=>{
    return(
        <>
        {
           data.map((item,index)=>(
            <div className="group/item hover:bg-slate-500 flex flex-row">
                <img src={item.avatar} className="rounded-full h-14 w-14"></img>
                <div className="flex flex-col justify-center items-center ">
                    <a>{item.title}</a>
                    <p>{item.role}</p>
                </div>
                <a className="group/edit invisible hover:bg-pink-50 p-1 rounded-full group-hover/item:visible flex flex-row justify-center items-center">
                    <span className="group-hover/edit:text-pink-500">Call</span>
                </a>
            </div>
           )) 
        }
        </>
    )
}
export default NestedGroups