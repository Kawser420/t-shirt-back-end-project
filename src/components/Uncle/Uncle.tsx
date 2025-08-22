import React from "react";
import Cousin from "../Mother/Cousin/Cousin";
import { UncleProps } from "../../types";

const Uncle: React.FC<UncleProps> = ({ ring }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Uncle</h2>
      <section className="flex flex-wrap gap-2">
        <Cousin>Hafiz</Cousin>
        <Cousin hasFriend={true} ring={ring}>
          Zamila
        </Cousin>
      </section>
    </div>
  );
};

export default Uncle;
