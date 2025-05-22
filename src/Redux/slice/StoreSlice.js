import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllStores } from '../services/StoreService';

export const fetchStores = createAsyncThunk('stores/fetchStores', async () => {
    return await getAllStores()
})


// Store slice
let initialState = {
    data: [],
    loading: false,
    error: null
}
const storeSlice = createSlice({
    name: 'stores',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchStores.pending, (state) => {
                state.loading = true

            })
            .addCase(fetchStores.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchStores.rejected, (state,action)=>{
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default storeSlice.reducer