import React from "react";

const orders = [
  {
    id: 0,
    profile: "https://i.pravatar.cc/?img=1",
    name: "Wade Warren",
    orderNo: "15478259",
    amount: 129.56,
    status: true,
  },
  {
    id: 1,
    profile: "https://i.pravatar.cc/?img=2",
    name: "Jane Copper",
    orderNo: "48965786",
    amount: 365.02,
    status: true,
  },
  {
    id: 2,
    profile: "https://i.pravatar.cc/?img=3",
    name: "Guy Hawkins",
    orderNo: "78943783",
    amount: 45.88,
    status: true,
  },
  {
    id: 3,
    profile: "https://i.pravatar.cc/?img=4",
    name: "Kristin Watson",
    orderNo: "247839056",
    amount: 65.0,
    status: false,
  },
  {
    id: 4,
    profile: "https://i.pravatar.cc/?img=5",
    name: "Cody Fisher",
    orderNo: "680835137",
    amount: 545.0,
    status: true,
  },
  {
    id: 5,
    profile: "https://i.pravatar.cc/?img=6",
    name: "Savannah Nguyen",
    orderNo: "78514568",
    amount: 128.2,
    status: false,
  },
];

const RecentOrders = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-5">
      <h1 className="text-xl font-bold pb-4">Recent Orders</h1>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="border-b border-gray-500 *:py-2 text-left">
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th className="text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-gray-600 last:border-none *:py-2.5"
            >
              <td className="flex items-center gap-2">
                <img
                  src={order.profile}
                  alt="profile"
                  className="size-9 rounded-full"
                />{" "}
                {order.name}
              </td>
              <td>{order.orderNo}</td>
              <td>${order.amount}</td>
              <td className="text-right">
                <span
                  className={`${
                    order.status
                      ? "bg-green-500/20 text-green-500"
                      : "bg-red-500/20 text-red-500"
                  } text-xs py-1 px-3 rounded-full`}
                >
                  {order.status ? "Delivered" : "Cancelled"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
