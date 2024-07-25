import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: {
        loading: false,
        watchlist: [],
        error: null,
        message: null,
    },
    reducers: {
        getWatchlistRequest(state, action) {
            state.watchlist = [];
            state.error = null;
            state.loading = true;
        },
        getWatchlistSuccess(state, action) {
            state.watchlist = action.payload;
            state.error = null;
            state.loading = false;
        },
        getWatchlistFailed(state, action) {
            state.watchlist = state.watchlist;
            state.error = action.payload;
            state.loading = false;
        },
        resetWatchlistSlice(state, action) {
            state.error = null;
            state.watchlist = state.watchlist;
            state.message = null;
            state.loading = false;
        },
        clearAllErrors(state, action) {
            state.error = null;
            state.watchlist = state.watchlist;
        },
    },
});

export const getWatchlist = () => async (dispatch) => {
    dispatch(watchlistSlice.actions.getWatchlistRequest());
    try {
        const { data } = await axios.get("http://127.0.0.1:5555/watchlist", {
            withCredentials: true,
        });
        dispatch(watchlistSlice.actions.getWatchlistSuccess(data));
        dispatch(watchlistSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(watchlistSlice.actions.getWatchlistFailed(error.message));
    }
};

export const clearAllWatchlistErrors = () => (dispatch) => {
    dispatch(watchlistSlice.actions.clearAllErrors());
};
export const resetWatchlistSlice = () => (dispatch) => {
    dispatch(watchlistSlice.actions.resetWatchlistSlice());
};

export default watchlistSlice.reducer;
