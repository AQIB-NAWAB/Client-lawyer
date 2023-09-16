import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  notifications:[],
  error: "",
  
};  


// login the user
export const getAllNotifications = createAsyncThunk("all/Notifications", async ( data,{rejectWithValue } ) => {
  try {
    console.log(data);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const response = await axios.get(
      'http://localhost:8080/api/v1/notifications',
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const deleteAllNotifications = createAsyncThunk("delete/all/Notifications", async ( data,{rejectWithValue } ) => {
    try {
      console.log(data);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
  
      const response = await axios.delete(
        'http://localhost:8080/api/v1/notifications',
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  });
  

const notificationReducer = createSlice({
  name: "Lawyer",
  initialState,
  reducers: {
    clearErrors:(state,)=>{
      state.error=""

    }
    
  },
  extraReducers: (builder) => {
    builder.addCase(getAllNotifications.pending, (state) => {
      state.loading= true
      state.error= ""
      state.notifications=[]

    });
    builder.addCase(getAllNotifications.fulfilled,(state,action)=>{
        state.loading=false
        state.notifications= action.payload
        state.error= ""
    })
    builder.addCase(getAllNotifications.rejected,(state,action)=>{
        state.loading=false
        state.error= action.payload
        state.notifications=[]
    })
 


    //delete all notifications

    builder.addCase(deleteAllNotifications.pending, (state) => {
        state.loading= true
        state.error= ""
  
      });
      builder.addCase(deleteAllNotifications.fulfilled,(state,action)=>{
          state.loading=false
          state.notifications= []
          state.error= ""
      })
      builder.addCase(deleteAllNotifications.rejected,(state,action)=>{
          state.loading=false
          state.error= action.payload
      })

},  
});

export const {clearErrors}=notificationReducer.actions
export default notificationReducer.reducer    