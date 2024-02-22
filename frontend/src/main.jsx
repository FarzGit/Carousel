import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import AdminHome from "./components/adminHome/imageUpload.jsx"
import VideoLoop from './components/videoComponent/videoComponent'

import AdminLogin from "./components/adminLogin/adminLogin"
import AdminVedioList from './components/adminVedioList/adminVedioList.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route path="/user" element={<VideoLoop/>} />
        <Route path='/adminLogin' element={<AdminLogin/>}/>
          
        <Route path="/image-Upload" element={<AdminHome/>}/>
        <Route  path="/admin-list" element={<AdminVedioList/>} />
        
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)
