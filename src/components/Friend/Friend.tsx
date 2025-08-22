import React from "react";
import { FriendProps } from "../../types";

const Friend: React.FC<FriendProps> = ({ ring }) => {
  return (
    <div className="mt-2 p-2 bg-gray-100 rounded">
      <h3 className="font-medium">Friend</h3>
      <p className="text-sm text-gray-600">Ring: {ring}</p>
    </div>
  );
};

export default Friend;
