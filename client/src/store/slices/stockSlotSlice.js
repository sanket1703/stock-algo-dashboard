import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const stockSlotSlice = createSlice({
    name: "stockSlot",
    initialState: {
        loading: false,
        stocks: {},
        error: null,
        message: null,
    },
    reducers: {
        getAllStocksRequest(state, action) {
            state.stocks = {};
            state.error = null;
            state.loading = true;
        },
        getAllStocksSuccess(state, action) {
            state.stocks = action.payload;
            state.error = null;
            state.loading = false;
        },
        getAllStocksFailed(state, action) {
            state.stocks = state.stocks;
            state.error = action.payload;
            state.loading = false;
        },
        resetStocksSlice(state, action) {
            state.error = null;
            state.stocks = state.stocks;
            state.message = null;
            state.loading = false;
        },
        clearAllErrors(state, action) {
            state.error = null;
            state.stocks = state.stocks;
        },
    },
});

export const getAllStocks = () => async (dispatch) => {
    dispatch(stockSlotSlice.actions.getAllStocksRequest());
    try {
        const { data } = await axios.get("http://127.0.0.1:5555/stock_slots", {
            withCredentials: true,
        });
        dispatch(stockSlotSlice.actions.getAllStocksSuccess(data));
        dispatch(stockSlotSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(stockSlotSlice.actions.getAllStocksFailed(error.message));
    }
};

export const clearAllStocksErrors = () => (dispatch) => {
    dispatch(stockSlotSlice.actions.clearAllErrors());
};
export const resetStocksSlice = () => (dispatch) => {
    dispatch(stockSlotSlice.actions.resetStocksSlice());
};

export default stockSlotSlice.reducer;
