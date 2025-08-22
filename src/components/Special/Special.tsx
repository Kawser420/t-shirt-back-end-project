import React from "react";
import { SpecialProps } from "../../types";

const Special: React.FC<SpecialProps> = ({ ring }) => {
  return (
    <div className="mt-2 p-2 bg-blue-50 rounded">
      <h3 className="font-medium">Special</h3>
      <p className="text-sm text-gray-600">Ring: {ring}</p>
    </div>
  );
};

export default Special;
