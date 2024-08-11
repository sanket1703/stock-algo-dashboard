import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";
import Navbar from "./sub-components/Navbar";
import { getAllClients } from "@/store/slices/clientSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
    const dispatch = useDispatch();
    const { clients, loading, error } = useSelector((state) => state.clients);

    useEffect(() => {
        dispatch(getAllClients());
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

    return (
        <>
            <Navbar />

            <div className="min-h-screen flex flex-col items-center bg-blue-100 text-gray-900 p-3">
                <div className="container mx-auto px-5">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
                        Client's Data
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {clients.length > 0 ? (
                            clients.map((client, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-5 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                                >
                                    <h3 className="text-xl font-semibold mb-2">
                                        Client Code: {client.client_code}
                                    </h3>
                                    <p className="text-base mb-2">
                                        Client ID: {client.clients_id}
                                    </p>
                                    <p className="text-base mb-4">
                                        Current Balance:{" "}
                                        {client.current_balance}
                                    </p>
                                    <Link
                                        to={`/${client.clients_id}`}
                                        className="btn bg-blue-700 text-white rounded-lg w-full h-10 mt-4 hover:bg-transparent hover:text-blue-700 border border-blue-700 transition duration-300 flex justify-center items-center"
                                    >
                                        Explore
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No clients available.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
