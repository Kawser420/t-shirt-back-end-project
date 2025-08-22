import React from "react";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";
import Myself from "../Myself/Myself";
import { FatherProps } from "../../types";

const Father: React.FC<FatherProps> = ({ ring }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Father</h2>
      <section className="flex gap-2">
        <Brother />
        <Sister />
        <Myself ring={ring} />
      </section>
    </div>
  );
};

export default Father;
