import * as BiIcon from "react-icons/bi";
import * as IoIosIcon from "react-icons/io";
import { type sidebarData, type items } from "./types";

export const SidebarData: sidebarData[] = [
  {
    section: "INBOX",
    items: [
      { icon: BiIcon.BiHome, label: "Your Inbox", count: 6 },
      { icon: BiIcon.BiBell, label: "Mentions", count: 10 },
      { icon: BiIcon.BiUser, label: "Created by you", count: 29 },
      { icon: BiIcon.BiGroup, label: "All", count: 237 },
      { icon: BiIcon.BiGroup, label: "Unassigned", count: 8 },
      { icon: BiIcon.BiCog, label: "Dashboard" },
    ],
  },
  {
    section: "TEAMS",
    collapsible: true,
    items: [
      { icon: BiIcon.BiGroup, label: "EMEA", count: 12 },
      { icon: BiIcon.BiGroup, label: "APAC", count: 42 },
      { icon: BiIcon.BiGroup, label: "USA", count: 3 },
    ],
  },
  {
    section: "TEAMMATES",
    collapsible: true,
    items: [
      { icon: BiIcon.BiUser, label: "June Jenson", count: 52 },
      { icon: BiIcon.BiUser, label: "Clara Richards", count: 42 },
      { icon: BiIcon.BiUser, label: "David Lee", count: 4 },
    ],
  },
  {
    section: "VIEWS",
    collapsible: true,
    items: [
      { icon: BiIcon.BiBell, label: "Waiting premium", count: 7 },
      { icon: BiIcon.BiCog, label: "Apps & integrations", count: 62 },
      { icon: BiIcon.BiGroup, label: "Social queries", count: 21 },
    ],
  },
];

export const sidebarFooter: items[] = [
  { icon: IoIosIcon.IoIosWarning, label: "Spam", count: 3 },
  { icon: IoIosIcon.IoIosKeypad, label: "Practice shortcuts" },
  { icon: BiIcon.BiMenu, label: "Edit sidebar" },
];
