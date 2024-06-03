const list = [
    {
        avatar:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        tile:"Kristen Ramos",
        description:"kristen.ramos@example.com"
    },
    {
        avatar:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        tile:"Kristen Ramos",
        description:"kristen.ramos@example.com"
    },
    {
        avatar:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        tile:"Kristen Ramos",
        description:"kristen.ramos@example.com"
    },
]
const FirstLast = () => {
    return (
        <>
        {
            list.map((item,index)=>(
                <div className="flex flex-col justify-center items-center bg-slate-700 p-4 gap-5 first:pt-0 last:pb-0 odd:bg-pink-500 even:bg-red-600" key={index}>
                    <div className="flex flex-row">
                        <img src={item.avatar} alt={item.tile} className="rounded-full h-10 w-10"/>
                        <div>
                            <p>{item.tile}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        </>
    )
}
export default FirstLast