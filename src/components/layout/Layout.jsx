import { NavBar } from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center font-mono text-gray-600">
      <NavBar />
      <div className=" w-screen flex-1 space-y-4 mt-4">{children}</div>
    </div>
  );
};
