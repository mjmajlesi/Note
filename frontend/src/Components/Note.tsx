import React, { useEffect, useState } from 'react'
import { INote } from './Home'
import { useParams } from 'react-router-dom'
import Notes from './Notes'

function Note() {
    const params = useParams()
    console.log(params)

    const [note, setNote] = useState<INote | null>(null)
  
    let GrtNoteById = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${params.id}`)
        let data = await response.json()
        setNote(data)
    }

    useEffect(() => {
        GrtNoteById()
    }, [])
  
    return (
    <div>
        {note ? <Notes {...note} /> : <p>Loading...</p>}
    </div>
  )
}
export default Note