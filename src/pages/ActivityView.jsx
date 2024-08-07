import React from "react";
import Activity from "../components/Activity";
import NetProfit from "../components/NetProfit";

const ActivityView = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 p-6">
      <div className="lg:col-span-3">
        <Activity />
      </div>
      <div className="lg:col-span-2">
        <NetProfit />
      </div>
    </div>
  );
};

export default ActivityView;
