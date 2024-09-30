import React, { useState } from 'react'

function Sidebar() {

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    };
  
  return (
    <aside
        className={`bg-light ${isSidebarCollapsed ? "collapsed" : ""}`}
        style={{
          width: isSidebarCollapsed ? "80px" : "250px", // ความกว้างของ Sidebar
          transition: "width 0.3s",
          height: "100vh", // ทำให้ sidebar สูงเต็มจอ
        }}
      >
        <div className="d-flex flex-column align-items-center py-4">
          {/* Logo */}
          <div
            className="rounded-circle bg-secondary mb-4"
            style={{ width: "100px", height: "100px" }}
          >
            <p className="text-center pt-3">Logo</p>
          </div>

          {/* List group for menu items */}
          <ul className="list-group w-100 px-2">
            {/* Menu item */}
            <li className="list-group-item list-group-item-action text-center">
              Menu 1
            </li>
            <li className="list-group-item list-group-item-action text-center">
              Menu 2
            </li>
            {/* Dropdown menu */}
            <li className="list-group-item list-group-item-action text-center dropdown">
              <button
                className="btn dropdown-toggle w-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu Dropdown
              </button>
              <ul className="dropdown-menu w-100">
                <li><a className="dropdown-item" href="#">Action 1</a></li>
                <li><a className="dropdown-item" href="#">Action 2</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>

  )
}

export default Sidebar