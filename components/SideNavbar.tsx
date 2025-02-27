"use client";

import React, { useState } from "react";
import { sidebarData } from "../Constant";
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the icons

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const path: any = sidebarData[0].items[0].path;

  const handleNavigation = (path: string) => {
    router.push(path); // Navigate to the specified path
  };

  return (
    <div className="flex flex-row border-r border-gray-900 dark:border-gray-500 font-inter">
      <div className="px-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 my-2 rounded-md focus:outline-none"
        >
          {isOpen ? (
            <FaTimes size={24} /> // Close icon
          ) : (
            <FaBars size={24} /> // Hamburger icon
          )}
        </button>
      </div>

      <div className="flex flex-col text-black dark:text-white">
        {isOpen && (
          <div className="w-64 h-screen p-4 px-2">
            {sidebarData.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-bold text-sm mb-2">
                  {section.title}
                </h3>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      onClick={() => handleNavigation(item.path)}
                      className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        <span className="">{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="bg-red-500 text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNavbar;