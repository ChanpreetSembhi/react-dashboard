import React from "react";
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiMoneyDollarCircleFill,
  RiShoppingBag3Fill,
  RiShoppingBag4Fill,
  RiShoppingBasket2Fill,
} from "@remixicon/react";

const IconMapping = {
  orders: RiShoppingBasket2Fill,
  delivered: RiShoppingBag4Fill,
  cancelled: RiShoppingBag3Fill,
  revenue: RiMoneyDollarCircleFill,
};

const statusStyling = {
  process: {
    bgColor: "bg-blue-600/30",
    color: "text-blue-500",
  },
  success: {
    bgColor: "bg-green-600/30",
    color: "text-green-500",
  },
  cancel: {
    bgColor: "bg-red-600/30",
    color: "text-red-500",
  },
  revenue: {
    bgColor: "bg-pink-600/30",
    color: "text-pink-500",
  },
};

const infos = [
  {
    id: 0,
    icon: "orders",
    status: "process",
    name: "Total Orders",
    total: "75",
    percentage: "3%",
    profit: true,
  },
  {
    id: 1,
    icon: "delivered",
    status: "success",
    name: "Total Delivered",
    total: "45",
    percentage: "5%",
    profit: false,
  },
  {
    id: 2,
    icon: "cancelled",
    status: "cancel",
    name: "Total Cancelled",
    total: "05",
    percentage: "14%",
    profit: true,
  },
  {
    id: 3,
    icon: "revenue",
    status: "revenue",
    name: "Total Revenue",
    total: "$12K",
    percentage: "8%",
    profit: false,
  },
];

const TotalInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {infos.map((info) => {
        const IconComponent = IconMapping[info.icon];

        const { bgColor, color } = statusStyling[info.status] || {
          bgColor: "bg-gray-700",
          textColor: "text-gray-500",
        };
        return (
          <div key={info.id} className="bg-gray-800 rounded-lg p-5">
            <div className={`${bgColor} rounded-lg inline-flex p-2 mb-2`}>
              <IconComponent className={`${color} size-8`} />
            </div>
            <p className="text-gray-300 text-sm">{info.name}</p>
            <div className="flex items-center justify-between mt-4">
              <h1 className="text-3xl font-bold">{info.total}</h1>
              <p
                className={`${
                  info.profit ? "text-green-500" : "text-red-500"
                } flex items-center gap-1`}
              >
                {info.profit ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
                {info.percentage}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TotalInfo;
