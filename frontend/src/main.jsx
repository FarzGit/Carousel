import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
<<<<<<< HEAD
import AdminHome from "./components/adminHome/imageUpload.jsx"
import VideoLoop from './components/videoComponent/videoComponent'

=======
import AdminHome from "./components/adminHome/adminHome"
>>>>>>> ba6fbe16607db744d6acaca67aeba9d69e9e4c90
import AdminLogin from "./components/adminLogin/adminLogin"
import AdminVedioList from './components/adminVedioList/adminVedioList.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
<<<<<<< HEAD
       <Route path="/user" element={<VideoLoop/>} />
=======
>>>>>>> ba6fbe16607db744d6acaca67aeba9d69e9e4c90
        <Route path="/admin-login" element={<AdminLogin/>} />
          
        <Route path="/image-Upload" element={<AdminHome/>} />
        <Route  path="/admin-list" element={<AdminVedioList/>} />
        
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)
