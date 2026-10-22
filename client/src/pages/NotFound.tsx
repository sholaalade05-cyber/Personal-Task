import { Link } from "react-router-dom";

const NotFound = () => {
  return <main className="flex flex-col items-center justify-center min-h-[70vh] text-center px-5">
    <h1 className="text-6xl md:text-9xl font-bold text-red-800">404</h1>
    <p className="text-2xl md:text-4xl mt-4 ">Oops! Page not found.</p>
    <Link to="/" className="bg-red-900 text-white px-6 py-3 rounded-lg text-xl mt-5">Go Home</Link>
  </main>;
};

export default NotFound;
