import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getCartItems = createAsyncThunk(
    'products',
    async () => {
        console.log('check');
        try {
            const response = await fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            console.log(jsonData);
            return jsonData;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
)


const itemsSlice = createSlice({
    name: "itemsCart",
    initialState: {
        cartItems: [],
        itemsLoading: false,
        errorItems: '',
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCartItems.pending, (state)=> {
            state.itemsLoading = true;
        })
        .addCase(getCartItems.fulfilled, (state, action)=> {
            state.itemsLoading = false;
            state.cartItems = action.payload;
            state.errorItems = '';
        })
        .addCase(getCartItems.rejected, (state, action)=> {
            state.itemsLoading = false;
            state.errorItems = action.payload.error;
        })
    }
})

// export const {} = itemsSlice.actions;
export default itemsSlice.reducer;