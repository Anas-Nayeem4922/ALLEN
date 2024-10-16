import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Neet from './components/Exam/Neet';
import Jee from './components/Exam/Jee';
import Error from './components/Error';
import Layout from './components/Layout';
import './App.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='exam/neet' element={<Neet/>}></Route>
            <Route path='exam/jee' element={<Jee/>}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
