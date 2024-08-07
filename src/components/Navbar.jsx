import {
  RiMailLine,
  RiNotification2Line,
  RiSearchLine,
  RiSettings3Line,
} from "@remixicon/react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 flex items-center justify-between p-5">
      {/* Searchbar */}
      <div className="bg-gray-700 border border-gray-500/80 flex items-center gap-2 p-1.5 rounded">
        <RiSearchLine className="size-5" />
        <input type="search" placeholder="Search" id="search" className="bg-transparent outline-none text-sm" />
      </div>
      <div className="flex items-center space-x-3">
        <a
          href="#"
          className="bg-gray-600 rounded-full size-8 flex items-center justify-center p-1.5"
        >
          <RiMailLine className="text-gray-300" />
        </a>
        <a
          href="#"
          className="bg-gray-600 rounded-full size-8 flex items-center justify-center p-1.5"
        >
          <RiSettings3Line className="text-gray-300" />
        </a>
        <a
          href="#"
          className="bg-gray-600 rounded-full size-8 flex items-center justify-center p-1.5"
        >
          <RiNotification2Line className="text-gray-300" />
        </a>
        <a href="#" className="size-8">
          <img src="https://i.pravatar.cc/150?img=12" alt="profile" className="rounded-full" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
