import {
  RiArrowRightSLine,
  RiBowlFill,
  RiCrosshair2Line,
  RiRestaurantLine,
} from "@remixicon/react";
import React from "react";

const categoryIcon = {
  goals: RiCrosshair2Line,
  dishes: RiBowlFill,
  menu: RiRestaurantLine,
};

// Define color mapping based on status
const statusColor = {
  danger: {
    bgColor: "bg-red-500/25",
    textColor: "text-red-500",
  },
  success: {
    bgColor: "bg-green-500/25",
    textColor: "text-green-500",
  },
  pending: {
    bgColor: "bg-yellow-500/25",
    textColor: "text-yellow-500",
  },
};

const categories = [
  {
    id: 0,
    icon: "goals",
    name: "Goals",
    status: "danger",
    link: "#",
  },
  {
    id: 1,
    icon: "dishes",
    name: "Popular Dishes",
    status: "success",
    link: "#",
  },
  {
    id: 2,
    icon: "menu",
    name: "Menus",
    status: "pending",
    link: "#",
  },
];

const Category = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-5 flex flex-col space-y-5">
      {categories.map((category) => {
        const IconComponent = categoryIcon[category.icon];

        const { bgColor, textColor } = statusColor[category.status] || {
          bgColor: "bg-gray-700",
          textColor: "text-gray-500",
        };

        return (
          <div key={category.id} className="flex items-center gap-3">
            <div
              className={`${bgColor} size-14 rounded-full flex items-center justify-center`}
            >
              {IconComponent && <IconComponent className={textColor} />}
            </div>
            <h5 className="text-lg">{category.name}</h5>
            <a
              href={category.link}
              className="bg-gray-600 size-7 rounded-full flex items-center justify-center pl-px cursor-pointer ml-auto"
            >
              <RiArrowRightSLine />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
