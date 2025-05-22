import { useState } from "react";
import { NavbarDataTop } from "./NavbarData";
import { NavbarDataBottom } from "./NavbarData";
import { IconContext } from "react-icons";

import "./navbar.css";

import Sidebar from "../Sidebar/Sidebar";
import { SidebarData, sidebarFooter } from "../Sidebar/SidebarData";

const Navbar = () => {
  const [isActive, setIsActive] = useState<string>("Inbox");
  const handleClick = (label: string) => {
    if (isActive === label) {
      setIsActive("");
    } else {
      setIsActive(label);
    }
  };

  let sidebarContent = null;

  switch (isActive) {
    case "Inbox":
      sidebarContent = (
        <Sidebar
          title="Help Desk"
          sidebarData={SidebarData}
          sidebarFooter={sidebarFooter}
          slide={true}
          nav="Inbox"
        />
      );
      break;
    case "Profile":
      sidebarContent = (
        <Sidebar
          title="Profile"
          sidebarData={SidebarData}
          sidebarFooter={sidebarFooter}
          slide={true}
          nav="Profile"
        />
      );
      break;
    case "Send":
      sidebarContent = (
        <Sidebar
          title="Send"
          sidebarData={SidebarData}
          sidebarFooter={sidebarFooter}
          slide={true}
          nav="Send"
        />
      );
      break;
    default:
      sidebarContent = (
        <Sidebar
          title="====Default===="
          sidebarData={SidebarData}
          sidebarFooter={sidebarFooter}
          slide={false}
          nav=""
        />
      );
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul>
            {NavbarDataTop.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li
                  key={idx}
                  className={`nav-items ${
                    isActive == item.label
                      ? "border-l-4 border-l-blue-600 bg-gray-100"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleClick(item.label)}
                >
                  <IconContext.Provider
                    value={{
                      color: `${isActive == item.label ? "#155dfc" : "#000"}`,
                    }}
                  >
                    <Icon key={idx} />
                  </IconContext.Provider>{" "}
                </li>
              );
            })}
          </ul>
          <ul>
            {NavbarDataBottom.map((item, idx) => {
              const Icon = item.icon;
              idx = idx + 4; // to keep resolve conflicting indexes
              return (
                <li
                  key={idx}
                  className={`nav-items ${
                    isActive == item.label
                      ? "border-l-4 border-l-blue-600 bg-gray-100"
                      : "border-r-2 border-gray-200"
                  }`}
                  onClick={() => handleClick(item.label)}
                >
                  <IconContext.Provider
                    value={{
                      color: `${isActive == item.label ? "#155dfc" : "#000"}`,
                    }}
                  >
                    <Icon />
                  </IconContext.Provider>{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {sidebarContent}
    </>
  );
};

export default Navbar;
