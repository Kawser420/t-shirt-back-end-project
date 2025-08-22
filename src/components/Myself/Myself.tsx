import React from "react";
import Special from "../Special/Special";
import { MyselfProps } from "../../types";

const Myself: React.FC<MyselfProps> = ({ ring }) => {
  return (
    <div className="border border-gray-300 rounded p-3">
      <h2 className="text-lg font-semibold">Myself</h2>
      <Special ring={ring} />
    </div>
  );
};

export default Myself;
