import { lazy,Suspense } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/blog/Home'
//import Register from './pages/auth/Register'
//import Login from './pages/auth/Login'
import AddBlog from './pages/blog/AddBlog'
//import EditBlog from './pages/blog/EditBlog'
//import SingleBlog from './pages/blog/SingleBlog'
import {Provider} from 'react-redux'
import store from '../store/store'
import Protected from './Protected'
import Spinner from './pages/blog/components/spinner/Spinner'
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const EditBlog = lazy(()=>import("./pages/blog/EditBlog"));
const SingleBlog =lazy(()=>import("./pages/blog/SingleBlog"));
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
     <Suspense fallback={<Spinner/>}>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path = '/blog/add' element={<Protected><AddBlog /></Protected>} />
      <Route path='/blog/edit/:id' element={<Protected><EditBlog /></Protected>} />
      <Route path='/blog/:id' element={<Protected><SingleBlog /></Protected>} />
    </Routes>
     </Suspense>
  </BrowserRouter>
</Provider>
  )
}

export default App
