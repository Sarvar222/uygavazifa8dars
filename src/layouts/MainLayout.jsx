import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <ToastContainer />
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
