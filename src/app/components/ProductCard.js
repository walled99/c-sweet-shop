export default function ProductCard({ name, price, image, desc }) {
  return (
    <div className="border p-4 mb-4 rounded shadow-sm">
      <img
        src={image}
        alt={name}
        className="w-full object-cover mb-2 rounded"
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="text-gray-300 mb-2">{desc}</p>
      <p className="font-semibold"> Price: {price}</p>
    </div>
  );
}
