import React, { useEffect, useState } from 'react'
import Note from './Note'
import { IoMdAddCircle } from "react-icons/io";


export interface INote {
  body : string,
  created : string,
  id : number,
  updated : string,
}

function Notes() {

  const [notes , SetNotes] = useState([] as INote[])

  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/notes')
    let data = await response.json()
    console.log(data)
    SetNotes(data)
  }

  useEffect(() => {
    getNotes()
  }, [])
  
  return (
    <div className='flex flex-col items-center gap-8 my-5'>
      {
        notes.map((note , index) => (
          <Note key={index} {...note} />
        )
        )
      }
      <button className='cursor-pointer transition-transform duration-200 hover:scale-110 rounded-lg' ><IoMdAddCircle color='orange' size={70} />
      </button>
    </div>
  )
}

export default Notes