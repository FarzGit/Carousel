import { Outlet } from "react-router-dom";
// import AdminNavBar from './components/adminNavBar/AdminNavBar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      {/* <AdminNavBar/> */}
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
