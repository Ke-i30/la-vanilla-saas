import React from 'react';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

export const Dashboard = () => {
  const stats = [
    { title: "Total Revenue", value: "$48,250", change: "+12.3%", icon: DollarSign },
    { title: "Active Users", value: "2,405", change: "+8.1%", icon: Users },
    { title: "Conversion Rate", value: "3.2%", change: "-0.4%", icon: TrendingUp },
    { title: "System Uptime", value: "99.98%", change: "0.0%", icon: Activity },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">{item.title}</span>
                <Icon className="w-5 h-5 text-amber-600" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-2xl font-semibold text-gray-900">{item.value}</span>
                <span className="text-xs font-medium text-emerald-600">{item.change}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
