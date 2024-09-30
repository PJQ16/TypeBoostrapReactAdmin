import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Sidebar from "../Components/Sidebar";
import { Navbar } from "../Components/Navbar";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

const DashboardLayout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} />

      {/* Main Content Area */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Content Area */}
       <Content/>

        {/* Footer */}
       <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
