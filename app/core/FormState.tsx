const FormState = ()=>{
    return (
        <>
        <div className="flex flex-col">
            <input type="text" aria-label="Username" placeholder="enter your username" value="tbone" disabled className="border border-1 px-2 rounded-md h-10"/>
            <input type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-700 invalid:text-pink-700"/>
        </div>
        </>
    )
}

export default FormState