import React, { useState } from "react";
import "./inbox.css";
import { InboxData } from "./InboxData";
import Messenger from "./Messenger/Messenger";

type inboxProps = {
  nav: string;
};

const Inbox: React.FC<inboxProps> = ({ nav }) => {
  const [isActive, setIsActive] = useState<string>("Michael");

  const handleClick = (name: string) => {
    if (name == isActive) {
      setIsActive("");
    } else {
      setIsActive(name);
    }
  };

  return (
    <>
      {nav ? (
        <>
          <div className="inbox-container">
            <div className="inbox-column">
              <div className="heading">
                <h2>Ellen Edwards</h2>
              </div>
              <div className="conversation-tab">
                <ul>
                  {InboxData.map((item, idx) => {
                    const Icon = item.profileIcon;
                    return (
                      <li
                        key={idx}
                        className={`profile-body ${
                          isActive == item.name ? "bg-blue-300" : ""
                        }`}
                        onClick={() => handleClick(item.name)}
                      >
                        <div className="profile-icon">{<Icon />}</div>
                        <div className="profile-heading">
                          <div className="profile-name">{item.name}</div>
                          <div className="profile-info">
                            {item.recentText ? (
                              <div className="profile-recent">
                                {item.recentText}
                              </div>
                            ) : null}
                            {item.timeStamp ? (
                              <div className="profile-timestamp">
                                {item.timeStamp}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          {isActive ? <Messenger user={isActive} display={true} /> : null}
        </>
      ) : null}
    </>
  );
};

export default Inbox;
