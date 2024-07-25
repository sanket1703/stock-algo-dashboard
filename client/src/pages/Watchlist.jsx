import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchlist } from "@/store/slices/watchlistSlice";
import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";

const Watchlist = () => {
    const dispatch = useDispatch();
    const { watchlist, loading, error } = useSelector(
        (state) => state.watchlist
    );

    const handleReload = () => {
        dispatch(getWatchlist());
    };

    useEffect(() => {
        dispatch(getWatchlist());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <SpecialLoadingButton />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                Error: {error}
            </div>
        );
    }

    const isEmpty = watchlist.length === 0;

    return (
        <div className="container mx-auto px-4 p-3">
            <h1 className="text-2xl font-bold mb-4 text-center">Watchlist</h1>
            {isEmpty ? (
                <div className="flex items-center justify-center h-screen">
                    Watchlist is Empty
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {watchlist.map((element, index) => (
                        <div key={index} className="p-4 border rounded shadow">
                            <h2 className="text-lg font-semibold">{element}</h2>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex flex-row justify-center mt-8 space-x-3">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Add
                </button>
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default Watchlist;
