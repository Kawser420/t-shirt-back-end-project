import React from "react";
import Cousin from "../Mother/Cousin/Cousin";

const Aunty: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Aunty</h2>
      <section className="flex gap-2">
        <Cousin>Kamal</Cousin>
        <Cousin>Jamal</Cousin>
      </section>
    </div>
  );
};

export default Aunty;
