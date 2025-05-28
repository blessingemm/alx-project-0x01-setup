import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-2">
        {name} <span className="text-gray-500 text-base">(@{username})</span>
      </h2>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-700 mb-1">
        Address: {address?.street}, {address?.suite}, {address?.city} - {address?.zipcode}
      </p>
      <p className="text-gray-700 mb-1">Phone: {phone}</p>
      <p className="text-gray-700 mb-1">Website: {website}</p>
      <p className="text-gray-700 font-medium mt-4">Company:</p>
      <p className="text-gray-600">{company?.name || "N/A"}</p>
      <p className="italic text-gray-500 text-sm">"{company?.catchPhrase || ""}"</p>
    </div>
  );
};

export default UserCard;
