interface ProductCardProps {
  title: string;
  description: string;
  color: "blue" | "red" | "green";
}

const colorClasses = {
  blue: "bg-blue-500 hover:bg-blue-600",
  red: "bg-red-500 hover:bg-red-600",
  green: "bg-green-500 hover:bg-green-600",
};

const ProductCard = ({ title, description, color }: ProductCardProps) => {
  return (
    <div className="max-w-xs p-6 rounded-2xl shadow-2xl flex flex-col justify-between bg-gray-900 text-white hover:scale-105 transition transform">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <button className={`${colorClasses[color]} px-6 py-2 rounded-lg font-semibold`}>
        Learn More
      </button>
    </div>
  );
};

export default ProductCard;