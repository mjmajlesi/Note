import React, { useState } from 'react'
import { INote } from './Home'
import Container from './Container'
import { MdArrowBack, MdEditNote } from 'react-icons/md'
import { AiTwotoneDelete } from 'react-icons/ai'
import { GrFormNextLink } from 'react-icons/gr'

function NotePage({ id, body, created, updated }: INote) {
    const [updateNote , SetUpdateNote] = useState(false)



    return (
        <div className='flex flex-col gap-4 justify-center items-center mt-12'>
            <h1 className='text-3xl font-semibold my-6'>NotePage {id}</h1>
            <Container>
                <div className='flex flex-col gap-6 items-center my-6 w-dvh h-[500px]  bg-[#485063] rounded-xl px-6 py-4'>
                    {
                        updateNote ? <textarea
                        className='text-xl text-[#dbd5d5] w-full h-[300px] bg-transparent border-none resize-none focus:outline-none rounded-md px-2 py-1'
                        defaultValue={body}
                      /> : <p className='text-xl text-[#dbd5d5]'>{body}</p>
                    }
                    <p className='text-lg font-semibold'>{created}</p>
                    <p className='text-lg font-semibold'>{updated}</p>
                    <div className='flex flex-row items-center justify-center gap-4 '>
                        <button onClick={() => updateNote ? SetUpdateNote(false) : SetUpdateNote(true)} className='bg-[#a24903] cursor-pointer transition-transform duration-200 hover:scale-110 px-2 py-1 rounded-lg'><MdEditNote size={30} /></button>
                        <button className='bg-[#a24903] px-2 py-1 rounded-lg transition-transform duration-200 hover:scale-110 cursor-pointer'><AiTwotoneDelete size={30} /></button>
                        <button className='bg-[#a24903] px-2 py-1 rounded-lg transition-transform duration-200 hover:scale-110 cursor-pointer'><MdArrowBack size={30} /></button>
                        <button className='bg-[#a24903] px-2 py-1 rounded-lg transition-transform duration-200 hover:scale-110 cursor-pointer'><GrFormNextLink size={30} /></button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NotePage