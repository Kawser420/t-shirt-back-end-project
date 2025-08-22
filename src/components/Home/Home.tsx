import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import toast from "react-hot-toast";
import { TShirt, CartItem } from "../../types";

const Home: React.FC = () => {
  const tshirts = useLoaderData() as TShirt[];
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (tshirt: TShirt) => {
    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      toast("You Have Already Added This T-Shirt");
    } else {
      const newCart = [...cart, { ...tshirt, quantity: 1 }];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (id: string) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tshirts.map((tshirt) => (
            <Tshirt
              key={tshirt._id}
              tshirt={tshirt}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="md:col-span-1">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default Home;
