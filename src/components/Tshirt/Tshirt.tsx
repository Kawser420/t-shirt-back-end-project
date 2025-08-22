import React from "react";
import { TShirtProps } from "../../types";

const Tshirt: React.FC<TShirtProps> = ({ tshirt, handleAddToCart }) => {
  const { picture, name, price } = tshirt;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={picture} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-gray-600 mb-3">Price: ${price}</p>
        <button
          onClick={() => handleAddToCart(tshirt)}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Tshirt;
