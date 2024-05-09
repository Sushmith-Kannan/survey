import Form from './components/form'
import Blocks from './components/blocks'
import Blogpage from './Pages/blogpage'
import { Routes ,Route} from 'react-router-dom'
import SignUp from './Pages/Signup'
import Blogpages from './Pages/blogpage'
import Login from './Pages/Login'

function App() {

  return (
    <>
    <div className='bg-gray-800'>
    
    <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/myblogs" element={<Blogpages />} />
          <Route path="/login" element={<Login />} />
       </Routes>
    </div>
    
    </>
  )
}

export default App
