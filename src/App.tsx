import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Homepage from './component/Homepage'
import RestrauntDetail from './component/RestrauntDetail'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/detail' element={<RestrauntDetail/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
