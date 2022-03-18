import { FC } from "react";
import Setting from "../../feature/Setting/Setting";
import DashboardLayout from "../../layouts/Dashboard/Dashboard";

const SettingPage: FC = () => {
  return (
    <DashboardLayout>
      <Setting />
    </DashboardLayout>
  );
};

export default SettingPage;
