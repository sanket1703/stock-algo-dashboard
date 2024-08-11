import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClient } from "@/store/slices/clientSlice";
import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";
import Navbar from "./sub-components/Navbar";

const ClientPage = () => {
    const { clientId } = useParams();
    const dispatch = useDispatch();
    const { singleClient, loading, error } = useSelector(
        (state) => state.clients
    );

    useEffect(() => {
        dispatch(getClient(clientId));
    }, [dispatch, clientId]);

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

    if (!singleClient || Object.keys(singleClient).length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                No client data available.
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center bg-blue-100 text-gray-900 p-3">
                <div className="container mx-auto px-5">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
                        Client Details
                    </h1>
                    <div className="bg-white p-5 rounded-lg shadow-lg mb-10 transform transition duration-300 w-full">
                        <h3 className="text-2xl font-semibold mb-5 text-center">
                            Client Information
                        </h3>
                        <div className="mb-5">
                            <p>
                                <strong>Client Code:</strong>{" "}
                                {singleClient.client_code}
                            </p>
                            <p>
                                <strong>Client ID:</strong>{" "}
                                {singleClient.clients_id}
                            </p>
                            <p>
                                <strong>Current Balance:</strong>{" "}
                                {singleClient.current_balance}
                            </p>
                            <p>
                                <strong>Brokerage:</strong>{" "}
                                {singleClient.brokerage}
                            </p>
                        </div>

                        {/* Daily Trade Log Table */}
                        <div className="bg-white p-5 rounded-lg shadow-lg mb-6">
                            <h2 className="text-2xl font-bold mb-4">
                                Daily Trade Log
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr className="text-center">
                                            <th className="py-2 px-4 border-b border-gray-200">
                                                Timestamp
                                            </th>
                                            <th className="py-2 px-4 border-b border-gray-200">
                                                Stock
                                            </th>
                                            <th className="py-2 px-4 border-b border-gray-200">
                                                Type
                                            </th>
                                            <th className="py-2 px-4 border-b border-gray-200">
                                                Price
                                            </th>
                                            <th className="py-2 px-4 border-b border-gray-200">
                                                Quantity
                                            </th>
                                            <th className="py-2 px-4 border-b border-gray-200">
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {singleClient.daily_trade_log &&
                                            Array.isArray(
                                                singleClient.daily_trade_log
                                            ) &&
                                            singleClient.daily_trade_log.map(
                                                (log, index) => (
                                                    <tr key={index}>
                                                        {log.map(
                                                            (item, idx) => (
                                                                <td
                                                                    key={idx}
                                                                    className="py-2 px-4 border-b border-gray-200"
                                                                >
                                                                    {typeof item ===
                                                                    "object"
                                                                        ? ""
                                                                        : item}
                                                                </td>
                                                            )
                                                        )}
                                                    </tr>
                                                )
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Holdings Table */}
                        <div className="bg-white p-5 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">
                                Holdings
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr className="text-center">
                                            <th className="py-2 px-4 border-b border-gray-200">
                                                Stock Name
                                            </th>
                                            <th className="py-2 px-4 border-b border-gray-200">
                                                Last Buy Price
                                            </th>
                                            <th className="py-2 px-4 border-b border-gray-200">
                                                Last Buy Timestamp
                                            </th>
                                            <th className="py-2 px-4 border-b border-gray-200">
                                                Quantity
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {singleClient.holding &&
                                            typeof singleClient.holding ===
                                                "object" &&
                                            Object.entries(
                                                singleClient.holding
                                            ).map(([key, hold], index) => (
                                                <tr key={index}>
                                                    <td className="py-2 px-4 border-b border-gray-200">
                                                        {hold.stock_name}
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-gray-200">
                                                        {hold.last_buy_price}
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-gray-200">
                                                        {
                                                            hold.last_buy_time_stamps
                                                        }
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-gray-200">
                                                        {hold.qty}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientPage;
