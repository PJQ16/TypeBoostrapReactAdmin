import React, { useState } from 'react'

export const Navbar = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="btn" onClick={toggleSidebar}>
            ☰ {/* Hamburger icon */}
          </button>
          <div className="ms-auto d-flex">
            {/* Window Control Icons (Mock-up) */}
            <span className="mx-2">⚪</span>
            <span className="mx-2">⚪</span>
            <span className="mx-2">⚪</span>
          </div>
        </nav>
  )
}
