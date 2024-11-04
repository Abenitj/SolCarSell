import React from 'react';
import { BsFillCarFrontFill, BsPeopleFill, BsCashCoin } from 'react-icons/bs';

const Dashboard = () => {
  const stats = [
    {
      title: "Total Cars",
      value: "124",
      icon: <BsFillCarFrontFill className="text-blue-500 text-2xl" />,
      change: "+12%"
    },
    {
      title: "Total Sales",
      value: "$284,392",
      icon: <BsCashCoin className="text-green-500 text-2xl" />,
      change: "+8%"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-2 dark:text-white">{stat.value}</h3>
                <span className="text-green-500 text-sm">sole car trade</span>
              </div>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
