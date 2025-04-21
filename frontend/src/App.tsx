import './App.css'
import Container from './Components/Container'
import Note from './Components/Notes'

function App() {
  return (
    <>
    <Container>
    <h1 className='text-3xl font-bold text-center my-5'>Notes App</h1>
      <Note />
    </Container>
    </>
  )
}

export default App
