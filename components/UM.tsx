"use client";

import React, { useState } from "react";

const UM: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "A", name: "A", email: "zhangsan@example.com", status: true, createdAt: "2024-09-01 10:00:00" },
    { id: 2, username: "B", name: "B", email: "lisi@example.com", status: true, createdAt: "2024-09-02 11:20:00" },
    { id: 3, username: "C", name: "C", email: "wangwu@example.com", status: false, createdAt: "2024-09-03 14:15:00" },
    { id: 4, username: "D", name: "D", email: "zhaoliu@example.com", status: true, createdAt: "2024-09-04 09:30:00" },
    { id: 5, username: "admin", name: "admin", email: "admin@example.com", status: true, createdAt: "2024-09-05 16:45:00" },
  ]);

  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this user？");
    if (confirmDelete) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleEdit = (id: number) => {
    alert(`Click Edit User ID：${id}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 左侧导航栏 */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">System management</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-green-100 text-green-700 rounded-md font-semibold">User management</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Role management</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Menu management</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Department management</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Notice and announcement</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Log management</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">system monitoring</li>
        </ul>
      </aside>

      {/* 用户管理内容 */}
      <div className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-4">User management</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-center">
                <th className="border p-2">User ID</th>
                <th className="border p-2">User account</th>
                <th className="border p-2">User name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">status</th>
                <th className="border p-2">Creation time</th>
                <th className="border p-2">Controls</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center hover:bg-gray-50">
                  <td className="border p-2">{user.id}</td>
                  <td className="border p-2 text-blue-600">{user.username}</td>
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={user.status} className="sr-only peer" readOnly />
                      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600"></div>
                    </label>
                  </td>
                  <td className="border p-2">{user.createdAt}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      ❌ Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-4 text-center text-gray-500">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UM;
