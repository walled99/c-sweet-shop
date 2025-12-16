import ProductCard from "./components/ProductCard";

export default function Home() {
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

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to C-Sweet Shop</h1>
      <p>Our delicious sweets are waiting for you!</p>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            desc={product.desc}
          />
        ))}
      </div>
    </div>
  );
}
