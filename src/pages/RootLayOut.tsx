import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const RootLayout = () => {
  return (
    <div>
      <div className="sticky-top">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
