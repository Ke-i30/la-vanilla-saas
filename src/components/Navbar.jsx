import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

export const Navbar = ({ user }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold tracking-tight text-amber-900">La Vanilla Enterprise</span>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <div className="flex items-center space-x-2 border-l pl-4 border-gray-200">
          <User className="w-6 h-6 p-1 bg-amber-100 text-amber-800 rounded-full" />
          <span className="text-sm font-medium text-gray-700">{user?.name || "Admin User"}</span>
        </div>
      </div>
    </header>
  );
};
