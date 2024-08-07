import {
  RiBarChartBoxFill,
  RiBarChartBoxLine,
  RiDashboardFill,
  RiHome5Fill,
  RiHome5Line,
  RiLogoutCircleRLine,
  RiShoppingBag4Fill,
  RiShoppingBag4Line,
  RiSurveyFill,
  RiSurveyLine,
  RiWallet3Fill,
  RiWallet3Line,
} from "@remixicon/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const activeLink = ({ isActive }) =>
    `${isActive ? "border-blue-500 text-blue-500" : "border-transparent text-gray-400"} border-l-2 px-5 py-px`;

  return (
    <aside className="bg-gray-800 flex flex-col items-center justify-between h-svh py-5 w-16">
      <div className="flex flex-col space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <RiDashboardFill className="size-8 text-blue-500" />
        </div>
        {/* Links */}
        <div className="flex flex-col items-center space-y-6">
          <NavLink to="/" className={activeLink}>
            {({ isActive }) =>
              isActive ? (
                <RiHome5Fill className="size-5" />
              ) : (
                <RiHome5Line className="size-5" />
              )
            }
          </NavLink>
          <NavLink to="/activity" className={activeLink}>
            {({ isActive }) =>
              isActive ? (
                <RiBarChartBoxFill className="size-5" />
              ) : (
                <RiBarChartBoxLine className="size-5" />
              )
            }
          </NavLink>
          <NavLink to="/feedback" className={activeLink}>
            {({ isActive }) =>
              isActive ? (
                <RiSurveyFill className="size-5" />
              ) : (
                <RiSurveyLine className="size-5" />
              )
            }
          </NavLink>
          <NavLink to="/wallet" className={activeLink}>
            {({ isActive }) =>
              isActive ? (
                <RiWallet3Fill className="size-5" />
              ) : (
                <RiWallet3Line className="size-5" />
              )
            }
          </NavLink>
          <NavLink to="/orders" className={activeLink}>
            {({ isActive }) =>
              isActive ? (
                <RiShoppingBag4Fill className="size-5" />
              ) : (
                <RiShoppingBag4Line className="size-5" />
              )
            }
          </NavLink>
        </div>
      </div>
      {/* Logout */}
      <div>
        <a href="#">
          <RiLogoutCircleRLine className="size-5 text-gray-300" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
