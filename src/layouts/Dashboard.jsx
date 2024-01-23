import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
