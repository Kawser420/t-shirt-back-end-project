import React from "react";
import { CartProps } from "../../types";

const Cart: React.FC<CartProps> = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products</p>;
  } else {
    message = (
      <div>
        <h3>Richest Person</h3>
        <p className="text-sm">Thanks for give me money</p>
      </div>
    );
  }

  const cartLengthClass = cart.length === 1 ? "text-blue-500" : "text-red-500";
  const conditionalClass = `font-bold border-2 ${
    cart.length === 2 ? "text-red-500" : "text-yellow-600"
  }`;

  return (
    <div>
      <h3 className={cartLengthClass}>Order Review: {cart.length}</h3>
      <h4 className={conditionalClass}>Something</h4>
      {cart.length > 2 ? (
        <span className="text-blue-500">some buy</span>
      ) : (
        <span className="text-pink-500">lose</span>
      )}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button
            className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => handleRemoveFromCart(tshirt._id)}
          >
            X
          </button>
        </p>
      ))}
      {cart.length === 2 && <p>Double class!!!</p>}
      {cart.length === 3 || <h4>NOT 3!!!</h4>}
    </div>
  );
};

export default Cart;
