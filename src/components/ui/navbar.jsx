import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold text-[#E62E2D]">
                VisitorLog
              </span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="checkin"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary"
            >
              Check In
            </Link>
            <Link
              to="checkout"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary"
            >
              Check Out
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
