import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-indigo-700 border-b border-indigo-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-center">
                    {" "}
                    {/* Changed justify-between to justify-center */}
                    <div className="flex items-center space-x-2">
                        <a
                            href="/"
                            className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        >
                            Home
                        </a>
                        <Link
                            to="/stock_slot"
                            className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        >
                            Stocks
                        </Link>
                        <Link
                            to="/watchlist"
                            className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        >
                            Watchlist
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
