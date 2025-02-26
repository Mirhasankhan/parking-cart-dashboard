import { SidbarItem, TRoles } from "@/types/common";
import { userRoles } from "./roles";
import { MdDashboard } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GoPackage } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";
import { LuTableProperties } from "react-icons/lu";
import { FcSalesPerformance } from "react-icons/fc";
import {
  UserRound,
  LandPlot,  
  ChartNoAxesCombined,
  MessageCirclePlus,
  LayoutDashboard,
} from "lucide-react";

export const sidebarItems = (role: TRoles): SidbarItem[] => {
  const roleMenus: SidbarItem[] = [];

  switch (role) {
    case userRoles.ADMIN:
      roleMenus.push({
        title: "Dashboard",
        path: `/${role}`,
        icon: LayoutDashboard,
      });
      roleMenus.push({
        title: "Manage Users",
        path: `/manage-users`,
        icon: LandPlot,
      });    
      roleMenus.push({
        title: "Reviews & Feedback",
        path: `/reviews-feedback`,
        icon: MessageCirclePlus,
      });
      roleMenus.push({
        title: "Reports & Analytics",
        path: `/reports-analytics`,
        icon: ChartNoAxesCombined,
      });

      roleMenus.push({
        title: "Profile",
        path: `/manage-profile`,
        icon: UserRound,
      });
      break;

    case userRoles.SELLER:
      roleMenus.push({
        title: "Dashboard",
        path: `/${role}`,
        icon: MdDashboard,
      });
      roleMenus.push({
        title: "Create Listing",
        path: `/${role}/create-listing`,
        icon: CiCirclePlus,
      });
      roleMenus.push({
        title: "Manage Properties",
        path: `/${role}/manage-property`,
        icon: LuTableProperties,
      });
      roleMenus.push({
        title: "Manage Sales",
        path: `/${role}/manage-sales`,
        icon: FcSalesPerformance,
      });
      roleMenus.push({
        title: "My Profile",
        path: `/${role}/manage-profile`,
        icon: CiUser,
      });
      break;
    case userRoles.USER:
      roleMenus.push({
        title: "Dashboard",
        path: `/${role}`,
        icon: MdDashboard,
      });
      roleMenus.push({
        title: "My Proposals",
        path: `/${role}/my-buys`,
        icon: GoPackage,
      });
      roleMenus.push({
        title: "My Profile",
        path: `/${role}/manage-profile`,
        icon: CiUser,
      });
      break;
    default:
      break;
  }
  return [...roleMenus];
};
