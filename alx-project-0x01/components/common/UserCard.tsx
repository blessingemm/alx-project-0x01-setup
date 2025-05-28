import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-2">
        {user.name} <span className="text-gray-500 text-base">(@{user.username})</span>
      </h2>
      <p className="text-gray-700 mb-1">Email: {user.email}</p>
      <p className="text-gray-700 mb-1">
        Address: {user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}
      </p>
      <p className="text-gray-700 mb-1">Phone: {user.phone}</p>
      <p className="text-gray-700 mb-1">Website: {user.website}</p>
      <p className="text-gray-700 font-medium mt-4">Company:</p>
      <p className="text-gray-600">{user.company.name}</p>
      <p className="italic text-gray-500 text-sm">"{user.company.catchPhrase}"</p>
    </div>
  );
};

export default UserCard;
