import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
