import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import StocksPage from "./pages/StocksPage";
import HomePage from "./pages/HomePage";
import { useDispatch } from "react-redux";
import { getAllStocks } from "./store/slices/stockSlotSlice";
import { getWatchlist } from "./store/slices/watchlistSlice";
import { getAllClients } from "./store/slices/clientSlice";
import ClientPage from "./pages/ClientPage";
import Watchlist from "./pages/Watchlist";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllStocks());
        dispatch(getWatchlist());
        dispatch(getAllClients());
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:clientId" element={<ClientPage />} />
                <Route path="/stock_slot" element={<StocksPage />} />
                <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
            <ToastContainer position="bottom-right" theme="dark" />
        </Router>
    );
};

export default App;
