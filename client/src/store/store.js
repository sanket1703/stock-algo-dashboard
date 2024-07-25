import { configureStore } from "@reduxjs/toolkit";
import stockSlotReducer from "./slices/stockSlotSlice";
import watchlistReducer from "./slices/watchlistSlice";
import clientReducer from "./slices/clientSlice";

export const store = configureStore({
    reducer: {
        stocks: stockSlotReducer,
        watchlist: watchlistReducer,
        clients: clientReducer,
    },
});
