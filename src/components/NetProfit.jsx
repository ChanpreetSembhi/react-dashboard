import React from "react";
import { RiArrowUpSFill } from "@remixicon/react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 70 },
  { name: "Group B", value: 30 },
];
const COLORS = ["#3b82f6", "#9ca3af"];

const NetProfit = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-5 flex items-center">
      <div className="md:w-2/3">
        <p className="text-xs">Net Profit</p>
        <h1 className="text-4xl lg:text-5xl font-bold py-4">$ 6759.70</h1>
        <p className="text-green-500 flex gap-0.5 text-sm">
          <RiArrowUpSFill className="size-5" />
          3%
        </p>
      </div>
      <div className="md:w-1/3 h-44">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NetProfit;
