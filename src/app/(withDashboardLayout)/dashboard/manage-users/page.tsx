"use client"
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";

const allUsers = [
  { userName: "John Doe", email: "john.doe@example.com", userRole: "Customer", status: "Active" },
  { userName: "Emma Smith", email: "emma.smith@example.com", userRole: "Owner", status: "Inactive" },
  { userName: "Alice Ben Johnson", email: "alice.j@example.com", userRole: "Admin", status: "Active" },
  { userName: "Michael Brown", email: "michael.b@example.com", userRole: "Customer", status: "Inactive" },
];

const ManageUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const filteredUsers = allUsers.filter((user) => {
    const matchesSearch = user.userName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "All" || user.userRole === selectedRole;
    return matchesSearch && matchesRole;
  });

 
  return (
    <div className="w-full mx-auto"> 
    <h1 className="font-medium">Welcome Back, User Name!</h1>
    <p className="pb-6">Manage Users</p>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 rounded-md w-full md:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded-md w-full md:w-1/4"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="All">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Owner">Owner</option>
          <option value="Customer">Customer</option>
        </select>
      </div>
      <Table>
        <TableHeader className="font-medium bg-[#FA7E34] rounded-md">
          <TableRow>
            <TableHead className="w-[300px] text-white">Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Role</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <TableRow key={user.userName}>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.userRole}</TableCell>
                <TableCell className={user.status === "Active" ? "text-green-600" : "text-red-600"}>
                  {user.status}
                </TableCell>
                <TableCell className="flex items-center gap-3">               
                  <Trash className="cursor-pointer text-red-500" />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUsers;
