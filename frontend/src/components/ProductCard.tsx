interface ProductCardProps {
  title: string;
  description: string;
  icon?: string; // optional: add an icon or image path
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white bg-opacity-5 backdrop-blur-md border border-gray-700 rounded-xl p-8 text-center hover:scale-105 transform transition shadow-lg max-w-xs">
      {icon && <img src={icon} alt={title} className="mx-auto mb-4 h-16" />}
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ProductCard;