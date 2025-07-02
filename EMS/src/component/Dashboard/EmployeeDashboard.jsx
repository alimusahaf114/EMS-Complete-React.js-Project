import React from "react";
import Header from "../other/Header";
import TaskListNo from "../other/TaskListNo";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-customGrey h-screen ">
      <Header />
      <TaskListNo />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
