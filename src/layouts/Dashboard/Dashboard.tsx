import { FC } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

type TDashboardLayout = {
  children: any;
};

const DashboardLayout: FC<TDashboardLayout> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
