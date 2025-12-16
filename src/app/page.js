"use client";
import { useState } from "react";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 1,
      name: "Kunafa",
      price: 50,
      image: "https://placehold.co/400x300/orange/white?text=Kunafa",
      desc: "Delicious Kunafa with fresh cream",
    },
    {
      id: 2,
      name: "Manakish",
      price: 30,
      image: "https://placehold.co/400x300/yellow/black?text=Manakish",
      desc: "Fresh baked Manakish with zaatar",
    },
    {
      id: 3,
      name: "Chocolate",
      price: 25,
      image: "https://placehold.co/400x300/brown/white?text=Chocolate",
      desc: "Rich C-Sweet Chocolate treat",
    },
    {
      id: 4,
      name: "Chocolate",
      price: 25,
      image: "https://placehold.co/400x300/brown/white?text=Chocolate",
      desc: "Rich C-Sweet Chocolate treat",
    },
    {
      id: 5,
      name: "Chocolate",
      price: 25,
      image: "https://placehold.co/400x300/brown/white?text=Chocolate",
      desc: "Rich C-Sweet Chocolate treat",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to C-Sweet Shop</h1>
      <p>Our delicious sweets are waiting for you!</p>
      {/* Cart */}
      <div className="border p-2 rounded px-4 mt-2">
        <h2 className="text-2xl font-bold  mb-4">Cart:({cart.length})</h2>
        <ul className="">
          {cart.map((item, index) => (
            <li className="flex gap-4 " key={index}>
              <span className="w-full">
                {item.name} - {item.price} EGP
              </span>
              <button
                className="text-red-500 hover:underline"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p>Total: {cart.reduce((total, item) => total + item.price, 0)} EGP</p>
        <button
          className="mt-2 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
      {/* Products */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            desc={product.desc}
            onAdd={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
