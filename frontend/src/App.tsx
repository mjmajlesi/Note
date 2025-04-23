import './App.css'
import Container from './Components/Container'
import Home from './Components/Home'
import Note from './Components/Note'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Home />} />
          <Route path='/notes/:id' element={<Note />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
