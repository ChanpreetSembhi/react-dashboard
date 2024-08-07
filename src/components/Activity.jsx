import React from "react";
import { BarChart, Bar, ResponsiveContainer, YAxis, XAxis } from "recharts";

const data = [
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "8",
    uv: 1500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "9",
    uv: 2500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "11",
    uv: 2000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "12",
    uv: 2500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "13",
    uv: 1500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "14",
    uv: 500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "15",
    uv: 800,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "16",
    uv: 2200,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "17",
    uv: 1800,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "18",
    uv: 3800,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "19",
    uv: 600,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "20",
    uv: 1000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "21",
    uv: 2600,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "22",
    uv: 1200,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "23",
    uv: 700,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "24",
    uv: 3100,
    pv: 4300,
    amt: 2100,
  },
];

const Activity = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-5">
      <h1 className="text-xl font-bold pb-5">Activity</h1>
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <YAxis type="number" domain={[0, 4000]} dataKey="uv" tick={{ fill: "#9ca3af" }} />
            <XAxis type="number" domain={[0, 25]} dataKey="name" tick={{ fill: "#9ca3af" }} />
            <Bar dataKey="uv" fill="#3b82f6" radius={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Activity;
