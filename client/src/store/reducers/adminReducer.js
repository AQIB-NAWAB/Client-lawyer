import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../request";

const initialState = {
  loading: false,

  allLawyers:[],
  pendingLawyers:[],
  approveLawyers:[],
  error: "",
  isUpdated:false,
};  


// login the user
export const getAllLawyers = createAsyncThunk("all/lawyers", async ( data,{rejectWithValue } ) => {
  try {
    console.log(data);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const response = await axios.get(
      `${url}/admin/lawyers`,
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
// login the user
export const getAllPendingLawyers = createAsyncThunk("all/pending/lawyers", async ( data,{rejectWithValue } ) => {
    try {
      console.log(data);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
  
      const response = await axios.get(
        `${url}/admin/lawyers/pending`,
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  });
  


  // login the user
export const getAllApprovedLawyers = createAsyncThunk("all/approved/lawyers", async ( data,{rejectWithValue } ) => {
    try {
      console.log(data);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
  
      const response = await axios.get(
        `${url}/admin/lawyers/approve`,
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  });


  // Update Lawyers status 
  export const upadteStatus = createAsyncThunk("update/status/lawyers", async ( {id,status},{rejectWithValue } ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
  
      const response = await axios.put(
        `${url}/admin/lawyer/status`,
        {
            id,
            status,
        },
        config,
        
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  });
  
const userReducer = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    clearErrors:(state,action)=>{
      state.error="",
      state.isUpdated=false
    }
    
  },
  extraReducers: (builder) => {
    builder.addCase(getAllLawyers.pending, (state) => {
      state.loading= true
      state.error= ""
      state.allLawyers=[]
    });
    builder.addCase(getAllLawyers.fulfilled,(state,action)=>{
        state.loading=false
        state.allLawyers= action.payload
        state.error= ""
    })
    builder.addCase(getAllLawyers.rejected,(state,action)=>{
        state.loading=false
        state.error= action.payload
        state.allLawyers=[]
    })
    
// register user
builder.addCase(getAllPendingLawyers.pending, (state) => {
    state.loading= true
    state.error= ""
    state.approveLawyers=[]
});
builder.addCase(getAllPendingLawyers.fulfilled,(state,action)=>{
    state.loading=false
    state.approveLawyers= action.payload
    state.error= ""
})
builder.addCase(getAllPendingLawyers.rejected,(state,action)=>{
    state.loading=false
    state.error= action.payload
    state.approveLawyers=[]
})


//
// register user
builder.addCase(getAllApprovedLawyers.pending, (state) => {
    state.loading= true
    state.error= ""
    state.pendingLawyers=[]
});
builder.addCase(getAllApprovedLawyers.fulfilled,(state,action)=>{
    state.loading=false
    state.pendingLawyers= action.payload
    state.error= ""
})
builder.addCase(getAllApprovedLawyers.rejected,(state,action)=>{
    state.loading=false
    state.error= action.payload
    state.allLawyers=[]
})
// update the lawyer status
builder.addCase(upadteStatus.pending, (state) => {
    state.loading= true
    state.error= ""
});
builder.addCase(upadteStatus.fulfilled,(state,action)=>{
    state.loading=false
    state.isUpdated= true
    state.error= ""
})
builder.addCase(upadteStatus.rejected,(state,action)=>{
    state.loading=false
    state.error= action.payload
})
},  
});

export const {clearErrors}=userReducer.actions
export default userReducer.reducer