import React, { useState } from "react";
import "./sidebar.css";
import { type sidebarData, type items } from "./types";
import Inbox from "../Inbox/Inbox";

type SidebarProps = {
  title: string;
  sidebarData: sidebarData[];
  sidebarFooter: items[];
  slide: boolean;
  nav?: string;
};

const Sidebar: React.FC<SidebarProps> = ({
  title,
  sidebarData,
  sidebarFooter,
  slide = false,
  nav,
}) => {
  const [isActive, setIsActive] = useState<string>("Your Inbox");
  const [openSections, setOpenSections] = useState<{ [key: string]: Boolean }>({
    TEAMS: true,
    TEAMMATES: true,
    VIEWS: true,
  });
  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const handleClick = (label: string, section: string) => {
    switch (section) {
      case "main":
        sidebarData.map((group) =>
          group.items.map((item) =>
            item.label == label ? setIsActive(label) : null
          )
        );
        break;
      case "footer":
        sidebarFooter.map((item) =>
          item.label == label ? setIsActive(label) : null
        );
    }
  };

  return (
    <div>
      <aside className={`sidebar ${slide ? "" : "-translate-x-80"}`}>
        <h2 className="title">{title}</h2>
        <div className="flex flex-col h-full justify-between">
          <div>
            {sidebarData.map((group) => (
              <div key={group.section} className="mb-4">
                <div
                  className="group-title"
                  onClick={() =>
                    group.collapsible && toggleSection(group.section)
                  }
                >
                  <span>{group.section}</span>
                  {group.collapsible && (
                    <span>
                      {openSections[group.section] ? (
                        <p>&#9660;</p>
                      ) : (
                        <p>&#9654;</p>
                      )}
                    </span>
                  )}
                </div>
                {(!group.collapsible || openSections[group.section]) && (
                  <ul>
                    {group.items.map((item, idx) => {
                      const Icon = item.icon;

                      return (
                        <li
                          key={idx}
                          className={`items
                    ${
                      isActive == item.label
                        ? "bg-white font-semibold text-black"
                        : "hover:bg-gray-200 text-gray-700"
                    }`}
                          onClick={() => handleClick(item.label, "main")}
                        >
                          <span className="label">
                            <Icon key={idx} />
                            {item.label}
                          </span>
                          {item.count !== undefined && (
                            <span className="count">{item.count}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div>
            {sidebarFooter.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li
                  key={idx}
                  className={`items ${
                    isActive == item.label
                      ? "bg-white font-semibold text-black"
                      : "hover:bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleClick(item.label, "footer")}
                >
                  <span className="label">
                    <Icon key={idx} />
                    {item.label}
                  </span>
                  {item.count !== undefined && (
                    <span className="count">{item.count}</span>
                  )}
                </li>
              );
            })}
          </div>
        </div>
      </aside>
      <div>
        {isActive == "Your Inbox" && nav == "Inbox" ? (
          <Inbox nav="Inbox" />
        ) : (
          <Inbox nav="" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
