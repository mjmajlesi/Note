import React from 'react'
import { INote } from './Notes'
import { MdEditNote } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";


function Note({ body, created, id, updated }: INote) {
    return (
            <div className='note w-full bg-[#485063] rounded-lg shadow-lg p-4'>
                <div className='flex justify-between items-center py-4'>
                    <h1 className='font-bold text-3xl'>Title {id}</h1>
                    <div className='flex gap-2'>
                        <button className='bg-[#a24903] cursor-pointer transition-transform duration-200 hover:scale-110 px-2 py-1 rounded-lg'><MdEditNote size={30} /></button>
                        <button className='bg-[#a24903] px-2 py-1 rounded-lg transition-transform duration-200 hover:scale-110 cursor-pointer'><AiTwotoneDelete size={30} /></button>
                    </div>
                </div>
                <p className="mx-4">{body}</p>
                <div className='my-5 flex flex-col items-center gap-2'>
                    <p className='text-sm'>Created : {created}</p>
                    <p className='text-sm'>Updated : {updated}</p>
                </div>
            </div>
    )
}

export default Note