import React from "react";
import Father from "../Father/Father";
import Mother from "../Mother/Mother";
import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";

const Grandpa: React.FC = () => {
  const ring = "diamond";
  return (
    <div className="mt-8 p-4 border-2 border-blue-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Grandpa</h2>
      <section className="flex flex-wrap gap-4">
        <Father ring={ring} />
        <Mother />
        <Aunty />
        <Uncle ring={ring} />
      </section>
    </div>
  );
};

export default Grandpa;
