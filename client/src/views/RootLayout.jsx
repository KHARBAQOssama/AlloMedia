import { Outlet } from "react-router-dom";
import Navbar from "./common/Navbar";

const RootLayout = () => {
  return (
    <main className="landing-page bg-brand-80 h-full w-full flex flex-col overflow-scroll">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
