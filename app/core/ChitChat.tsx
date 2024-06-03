"use client"

import {Icon} from "@iconify/react"
const ChitChat = () => {
    return (
        <>
            <div className={'flex flex-row pl-3 pr-16 py-4 justify-start bg-white rounded-lg'}>
                <div className={'mr-2'}>
                    <Icon icon={'ri:wechat-fill'} width={70}/>
                </div>
                <div className={'flex flex-col gap-1 mt-1'}>
                    <p className={'font-medium text-2xl text-black'}>
                        ChitChat
                    </p>
                    <p className={'text-sm text-gray-500'}>You have a new message!</p>
                </div>
            </div>
        </>
    )
}
export default ChitChat