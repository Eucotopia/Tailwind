const LindFord = () => {
    return (
        <>
            <div className={'flex flex-row pl-6 py-4 pr-28 bg-white rounded-2xl gap-4'}>
                <img src={'https://tailwindcss.com/img/erin-lindford.jpg'} alt={'Erin Lindford'}
                     className={"rounded-full size-24"}/>
                <div className={"flex flex-col gap-1 justify-center"}>
                    <div>
                        <p className={'font-medium text-xl'}>Erin Lindford</p>
                        <p className={'text-sm text-gray-500 font-medium'}>Product Enfineer</p>
                    </div>
                    <div>
                        <button className={'border border-purple-600 rounded-2xl text-purple-600 font-bold px-2'}>Message
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default LindFord