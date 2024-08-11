import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStocks } from "../store/slices/stockSlotSlice";
import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";
import Navbar from "./sub-components/Navbar";

const StocksPage = () => {
    const dispatch = useDispatch();
    const { stocks, loading, error } = useSelector((state) => state.stocks);

    const handleReload = () => {
        dispatch(getAllStocks());
    };

    useEffect(() => {
        dispatch(getAllStocks());
    }, [dispatch]);

    if (loading) {
        return <SpecialLoadingButton />;
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                Error: {error}
            </div>
        );
    }

    const isEmpty = Object.keys(stocks).length === 0;

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 p-3">
                <h1 className="text-2xl font-bold mb-4 text-center">Stocks</h1>
                {isEmpty ? (
                    <div className="flex items-center justify-center h-screen">
                        No stocks available
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(stocks).map(([stock, price]) => (
                            <div
                                key={stock}
                                className="p-4 border rounded shadow"
                            >
                                <h2 className="text-lg font-semibold">
                                    {stock.split(".")[0]}
                                </h2>
                                <p>Price: {price}</p>
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleReload}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Reload
                    </button>
                </div>
            </div>
        </>
    );
};

export default StocksPage;
