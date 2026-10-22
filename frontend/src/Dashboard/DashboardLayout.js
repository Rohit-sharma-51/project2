import { Outlet } from "react-router-dom";
import Dashboardnavbar from "./Dashboardnavbar"; // ✅ ADD THIS
import Dashboardfarmer from "./Dashboardfarmer";

function DashboardLayout() {
  return (
    <>
      <Dashboardnavbar />   {/* ✅ ADD THIS */}
      <Outlet />
    </>
  );
}

export default DashboardLayout;