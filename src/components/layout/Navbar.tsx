"use client";
import Dock from "@/components/Dock";
import { GoHome } from "react-icons/go";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdInformationCircleOutline } from "react-icons/io";
import DockSubMenu from "@/components/DockSubMenu";
import { useRouter } from "next/navigation";

import {
  FaProjectDiagram,
  FaImages,
  FaComments,
  FaDollarSign,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();

  const items = [
    {
      icon: <GoHome size={18} />,
      label: "Home",
      onClick: () => router.push("/"),
    },
    {
      icon: <IoBriefcaseOutline size={18} />,
      label: "Services",
      onClick: () => router.push("/services"),
    },
    {
      label: "About",
      icon: (
        <DockSubMenu
          trigger={<IoMdInformationCircleOutline size={22} />}
          items={[
            { label: "Company", href: "/about" },
            { label: "Team", href: "/about/team" },
          ]}
        />
      ),
      onClick: () => {},
    },
    {
      icon: <BsTelephone size={18} />,
      label: "Contact",
      onClick: () => router.push("/contact"),
    },
    {
      icon: <FaBlog size={18} />,
      label: "Blog",
      onClick: () => router.push("/blog"),
    },
    {
      label: "More",
      icon: (
        <DockSubMenu
          trigger={<RxHamburgerMenu size={18} />}
          items={[
            {
              label: "Projects",
              icon: <FaProjectDiagram size={14} />,
              href: "/projects",
            },
            {
              label: "Gallery",
              icon: <FaImages size={14} />,
              href: "/gallery",
            },
            {
              label: "Client Feedback",
              icon: <FaComments size={14} />,
              href: "/testimonials",
            },
            {
              label: "Pricing",
              icon: <FaDollarSign size={14} />,
              href: "/pricing",
            },
            {
              label: "FAQs",
              icon: <FaQuestionCircle size={14} />,
              href: "/faq",
            },
          ]}
        />
      ),
      onClick: () => {},
    },
  ];

  return (
    <Dock
      className=""
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
}
