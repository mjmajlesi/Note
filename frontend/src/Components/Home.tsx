import React, { useEffect, useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import Notes from './Notes';


export interface INote {
  body : string,
  created : string,
  id : number,
  updated : string,
}

function Home() {

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
    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 my-5'>
      {
        notes.map((note , index) => (
          <Notes key={index} {...note} />
        )
        )
      }
      <button className='cursor-pointer transition-transform duration-200 hover:scale-y-105 rounded-lg' ><IoMdAddCircle color='orange' size={70} />
      </button>
    </div>
  )
}

export default Home