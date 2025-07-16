import React from "react";
import Login from "./component/Auth/login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
    </div>
  );
};

export default App;
