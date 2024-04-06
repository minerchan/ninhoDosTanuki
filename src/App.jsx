import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Flashcard from './pages/Flashcard/Flashcard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/flashcard' element={<Flashcard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App