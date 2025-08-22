import React from "react";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";
import Myself from "../Myself/Myself";

const Mother: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Mother</h2>
      <section className="flex flex-wrap gap-2">
        <Brother />
        <Sister />
        <Myself />
      </section>
    </div>
  );
};

export default Mother;
