import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="w-screen bg-gray-800 font-mono">
      <div className="flex h-12 items-center pl-4">
        <div className="flex space-x-1 text-sm">
          <Link
            to="/"
            className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/variant"
            className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            variants
          </Link>
          <Link
            to="/componentsAnimationControls"
            className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            componentsAnimationControls
          </Link>
          <Link
            to="/animateSingleValues"
            className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            AnimateSingleValues
          </Link>
          <Link
            to="/layoutAnimation"
            className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            LayoutAnimation
          </Link>
          <Link
            to="/layoutId"
            className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            LayoutId
          </Link>
        </div>
      </div>
    </nav>
  );
};
