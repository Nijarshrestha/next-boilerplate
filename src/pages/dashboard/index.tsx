import { FC } from "react";
import Dashboard from "../../feature/Dashboard/Dashboard";
import DashboardLayout from "../../layouts/Dashboard/Dashboard";

const DashboardPage: FC = () => {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardPage;
