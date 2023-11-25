// lawyerSearchSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../request';

const initialState = {
  lawyers: [],
  loading: false,
  error: null,
};


export const searchLawyers = createAsyncThunk(
    'search /lawyers',
    async ({name,practice_area,province,city,budget}, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };
        const response = await axios.get(`${url}/search/lawyers?city=${city}&budget=${budget}&name=${name}&practice_area=${practice_area}&province=${province}`,
        {},
        config);
        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch user data');
      }
    }
  );

const lawyerSearchSlice = createSlice({
  name: 'lawyerSearch',
  initialState,
  reducers: {
    clearErrors:(state)=>{
      state.error=""
    }
  },
  extraReducers: (builder) => {
    builder.addCase(searchLawyers.pending, (state) => {
      state.loading= true
      state.lawyers= []

      state.error= ""
    });
    builder.addCase(searchLawyers.fulfilled,(state,action)=>{
        state.loading=false
        state.lawyers= action.payload
        state.error= ""
    })
    builder.addCase(searchLawyers.rejected,(state,action)=>{
        state.loading=false
      state.lawyers= []

        state.error= action.payload
    })
}
});


export const {clearErrors}=lawyerSearchSlice.actions
export default lawyerSearchSlice.reducer;
