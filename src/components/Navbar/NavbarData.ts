import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import * as IoIosIcon from "react-icons/io";
import * as IoIcon from "react-icons/io";
import * as TbBrandIcon from "react-icons/tb";
import * as GiIcon from "react-icons/gi";
import * as RiIcon from "react-icons/ri";
import * as GrIcon from "react-icons/gr";
import * as Fa6Icon from "react-icons/fa6";
import * as CgIcon from "react-icons/cg";

import { type Item } from "./types";
export const NavbarDataTop: Item[] = [
  {
    icon: FaIcon.FaIntercom,
    label: "Home",
    link: "/",
  },
  {
    icon: MdIcon.MdInbox,
    label: "Inbox",
    link: "/inbox",
  },

  {
    icon: TbBrandIcon.TbBrandIntercom,
    label: "Profile",
    link: "/profile",
  },
  {
    icon: IoIosIcon.IoIosSend,
    label: "Send",
    link: "/send",
  },
];
export const NavbarDataBottom: Item[] = [
  {
    icon: GiIcon.GiElectric,
    label: "Electric",
    link: "/#",
  },
  {
    icon: FaIcon.FaRegLightbulb,
    label: "Lightbulb",
    link: "/#",
  },
  {
    icon: GiIcon.GiOpenBook,
    label: "OpenBook",
    link: "/#",
  },
  {
    icon: MdIcon.MdBarChart,
    label: "BarChart",
    link: "/#",
  },
  {
    icon: IoIcon.IoMdPeople,
    label: "People",
    link: "/#",
  },
  {
    icon: RiIcon.RiMessageFill,
    label: "Message",
    link: "/#",
  },
  {
    icon: GrIcon.GrBraille,
    label: "Braille",
    link: "/#",
  },
  {
    icon: Fa6Icon.FaGraduationCap,
    label: "Cap",
    link: "/#",
  },
  {
    icon: CgIcon.CgProfile,
    label: "User",
    link: "/#",
  },
];
