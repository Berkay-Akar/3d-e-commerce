import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          3D Shop
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/store" className="text-gray-600 hover:text-gray-900">
                Store
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-600 hover:text-gray-900 relative"
              >
                Cart
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
