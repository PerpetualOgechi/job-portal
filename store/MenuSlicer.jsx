import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenu = createAsyncThunk("fetchMenu", async () => {
    const data = await fetch("https://comx.onrender.com/api/Product/get-all-products?PageNumber=1&PageSize=1000000")
    return data.json()
})

const menuSlice = createSlice({
    name: "menus",
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMenu.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchMenu.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchMenu.rejected, (state, action) => {
            state.error = true
        })
    }
})

export default menuSlice