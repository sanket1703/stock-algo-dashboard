import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const clientSlice = createSlice({
    name: "clients",
    initialState: {
        loading: false,
        clients: [],
        error: null,
        message: null,
    },
    reducers: {
        getAllClientsRequest(state, action) {
            state.clients = [];
            state.error = null;
            state.loading = true;
        },
        getAllClientsSuccess(state, action) {
            state.clients = action.payload;
            state.error = null;
            state.loading = false;
        },
        getAllClientsFailed(state, action) {
            state.clients = state.clients;
            state.error = action.payload;
            state.loading = false;
        },
        resetAllClientSlice(state, action) {
            state.error = null;
            state.clients = state.clients;
            state.message = null;
            state.loading = false;
        },
        clearAllErrors(state, action) {
            state.error = null;
            state.clients = state.clients;
        },
    },
});

export const getAllClients = () => async (dispatch) => {
    dispatch(clientSlice.actions.getAllClientsRequest());
    try {
        const { data } = await axios.get("http://127.0.0.1:5555/clients", {
            withCredentials: true,
        });
        dispatch(clientSlice.actions.getAllClientsSuccess(data));
        dispatch(clientSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(clientSlice.actions.getAllClientsFailed(error.message));
    }
};

export const clearAllStocksErrors = () => (dispatch) => {
    dispatch(clientSlice.actions.clearAllErrors());
};
export const resetClientsSlice = () => (dispatch) => {
    dispatch(clientSlice.actions.resetAllClientSlice());
};

export default clientSlice.reducer;
