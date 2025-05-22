import React, { useState } from "react";
import * as faIcons from "react-icons/fa";
import * as bsIcons from "react-icons/bs";
import * as IoIcon from "react-icons/io5";
import * as MdIcon from "react-icons/md";
import * as HiIcon from "react-icons/hi2";
import "./messenger.css";
type messengerProps = {
  user: string;
  display: boolean;
};

const Messenger: React.FC<messengerProps> = ({ user }) => {
  const [displayLinks, setDisplayLinks] = useState(true);
  const [displayConversationAtt, setDisplayConversationAtt] = useState(true);
  const [displayUserData, setDisplayUserData] = useState(false);

  function handleClickLinks() {
    setDisplayLinks(!displayLinks);
  }
  function handleClickConversationAtt() {
    setDisplayConversationAtt(!displayConversationAtt);
  }
  function handleClickUserData() {
    setDisplayUserData(!displayUserData);
  }

  return (
    <div className="flex flex-col">
      <div className="messenger-container">
        <div className="heading-container">
          <h2 className="heading">{user}</h2>
          <div className="heading-buttons">
            <div className="icons">{<faIcons.FaRegStar />}</div>
            <div className="icons">{<bsIcons.BsThreeDots />}</div>
            <div className="icons">{<faIcons.FaTicketAlt />}</div>
            <div className="icons">{<IoIcon.IoCall />}</div>
            <div className="icons">{<faIcons.FaMoon />}</div>
            <div className="icons">{<MdIcon.MdPriorityHigh />}</div>
          </div>
        </div>
        <div className="chat-container">
          <div className="chat-receiver">
            <div className="receiver-container">
              <div className="receiver-message">
                I understand your concern. It might be easier to troubleshoot
                this over a call.
              </div>

              <div className="timestamp-receiver">9m</div>
            </div>
          </div>
          <div className="chat-status">
            <div className="status-container">
              <div className="status-message">
                <div>Messenger call active • Recording</div>
                <div>5:37m</div>
              </div>
            </div>
          </div>
        </div>
        <div className="message-input-container">
          <div className="message-input-area">
            <input placeholder="Type a reply..." />
            <div className="misc-btn-container">
              <div className="misc-btn">
                <div className="btns">{<bsIcons.BsLightningChargeFill />} </div>
                <div className="btns text-gray-500  text-3xl">l</div>
                <div className="btns">{<faIcons.FaBookmark />}</div>
                <div className="btns">
                  {<HiIcon.HiGif className="w-5 h-6" />}
                </div>
                <div className="btns">{<bsIcons.BsPaperclip />}</div>
                <div className="btns">{<faIcons.FaImage />}</div>
              </div>
              <div className="">
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[640px]">
          <div className="w-80 bg-white flex flex-col border-b-2 border-b-gray-200">
            <div className="p-4 h-16 border-b-2 border-b-gray-200">
              <h2 className="font-bold text-lg">Details</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 jus">
              <div className="mb-2 grid grid-cols-2">
                <div className=" text-gray-500">Assignee</div>
                <div className="font-semibold">Ellen Edwards</div>

                <div className=" text-gray-500">Team</div>
                <div className="font-semibold">FastTrack</div>
              </div>
            </div>
          </div>
          {/* Links */}
          <div className=" border-b-2 border-b-gray-200 ">
            <div className="px-4 py-2 flex justify-between">
              <h2 className="font-bold">LINKS</h2>
              <h2 className="font-bold" onClick={handleClickLinks}>
                {displayLinks ? <p>&#9660;</p> : <p>&#9654;</p>}
              </h2>
            </div>
            <div
              className={`flex flex-col px-4 w-full transition-all duration-300 ease-in overflow-hidden
                ${displayLinks ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <span className="py-2 font-semibold">Tracker Ticket</span>
              <span className="py-2 font-semibold">Back-office Ticket</span>
              <span className="py-2 font-semibold">Side Conversations</span>
            </div>
          </div>
          {/* Converstain Atribute */}
          <div className=" border-b-2 border-b-gray-200 ">
            <div className="px-4 py-2 flex justify-between">
              <h2 className="font-bold">CONVERSTAION ATTRIBUTES</h2>
              <h2 className="font-bold" onClick={handleClickConversationAtt}>
                {displayConversationAtt ? <p>&#9660;</p> : <p>&#9654;</p>}
              </h2>
            </div>
            <div
              className={`grid grid-cols-2 justify-between px-4 w-full transition-all duration-300 ease-in overflow-hidden
                ${
                  displayConversationAtt
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <p>Subject</p>
              <p>+Add</p>
              <p>Id</p>
              <p>#139018</p>
              <p>Priority</p>
              <p>High</p>
              <p>Version</p>
              <p>V3</p>
              <p>Language</p>
              <p>English</p>
              <p>Legacy</p>
              <p className="mb-4">False</p>
            </div>
          </div>
          {/*User data*/}
          <div className=" border-b-2 border-b-gray-200">
            <div className="px-4 py-2 flex justify-between">
              <h2 className="font-bold">USER DATA</h2>
              <h2 className="font-bold" onClick={handleClickUserData}>
                {displayUserData ? <p>&#9660;</p> : <p>&#9654;</p>}
              </h2>
            </div>
            <div
              className={`grid grid-cols-2 justify-between px-4 w-full transition-all duration-300 ease-in overflow-hidden
                ${
                  displayUserData ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }
              `}
            >
              <p>Name</p>
              <p>Michael</p>
              <p>Company</p>
              <p>FlowFX</p>
              <p>Location</p>
              <p>London</p>
              <p>Email</p>
              <p>michael@flow...</p>
              <h2 className="font-bold mb-4">See all</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
