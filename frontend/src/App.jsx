
import ImageCarosole from "./components/carosole/carosoleSlide"
import AdminHome from "./components/adminHome/adminHome"
import AdminLogin from "./components/adminLogin/adminLogin"
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
    <Router>
      <Routes>

        <Route path="/user" element={<ImageCarosole/>} />
        <Route path="/admin" element={<AdminHome/>} />
        <Route path="/admin-login" element={<AdminLogin/>} />


      </Routes>
    </Router>
      {/* <ImageCarosole/> */}
      {/* <AdminHome/> */}
    </>
  )
}

export default App
