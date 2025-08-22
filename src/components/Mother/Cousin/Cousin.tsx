import React from "react";
import Friend from "../../Friend/Friend";
import { CousinProps } from "../../../types";

const Cousin: React.FC<CousinProps> = ({ children, hasFriend, ring }) => {
  return (
    <div className="border border-gray-300 rounded p-4">
      <h2 className="text-lg font-semibold">Cousin</h2>
      <p className="text-sm text-gray-600">{children}</p>
      {hasFriend && <Friend ring={ring} />}
    </div>
  );
};

export default Cousin;
