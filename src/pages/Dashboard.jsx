import React from "react";
import TotalInfo from "../components/TotalInfo";
import RecentOrders from "../components/RecentOrders";
import Feedback from "../components/Feedback";
import Category from "../components/Category";
import NetProfit from "../components/NetProfit";
import Activity from "../components/Activity";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold pb-4">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3 flex flex-col space-y-6">
          <TotalInfo />
          <Activity />
          <RecentOrders />
        </div>
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <NetProfit />
          <Category />
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
