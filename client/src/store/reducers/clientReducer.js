import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  sentRequests:[],
  returnOffers:[],
  error: "",
  isAccepted:false,
};  


// login the user
export const getAllSentRequest = createAsyncThunk("all/Request", async ( data,{rejectWithValue } ) => {
  try {
    console.log(data);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const response = await axios.get(
      'http://localhost:8080/api/v1/client/sent-requests',
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
// login the user
export const getAllReturnOffers = createAsyncThunk("all/Offers", async ( data,{rejectWithValue } ) => {
    try {
      console.log(data);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
  
      const response = await axios.get(
        'http://localhost:8080/api/v1/client/return-requests',
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  });  




  // Accept Offer
  export const acceptOffer = createAsyncThunk("accept/Offer", async ( {id},{rejectWithValue } ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
  
      const response = await axios.post(
        `http://localhost:8080/api/v1/accept-offer/${id}`,
        {},
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  });  

  


  export const postjob = createAsyncThunk("accept/Offer", async ( {city,province,description,case_type,budget},{rejectWithValue } ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
  
      const response = await axios.post(
        `http://localhost:8080/api/v1/custom/send-custom-request/`,
        {city,province,description,case_type,budget},
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  });  



  export const sendRequest = createAsyncThunk("send/Request", async ( {case_description,case_type,budget,id},{rejectWithValue } ) => {
    try {
      console.log({description,case_type,budget,id})
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
  
      const response = await axios.post(
        `http://localhost:8080/api/v1/send-request/${id}`,
        {case_description,case_type,budget},
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  });  

const clientReducer = createSlice({
  name: "Client",
  initialState,
  reducers: {
    clearErrors:(state,)=>{
      state.error="",
      state.isAccepted=false
    }
    
  },
  extraReducers: (builder) => {
    builder.addCase(getAllSentRequest.pending, (state) => {
      state.loading= true
      state.error= ""
      state.sentRequests=[]

    });
    builder.addCase(getAllSentRequest.fulfilled,(state,action)=>{
        state.loading=false
        state.sentRequests= action.payload
        state.error= ""
    })
    builder.addCase(getAllSentRequest.rejected,(state,action)=>{
        state.loading=false
        state.error= action.payload
        state.sentRequests=[]
    })
    
// register user
builder.addCase(getAllReturnOffers.pending, (state) => {
    state.loading= true
    state.error= ""
    state.returnOffers=[]

  });
  builder.addCase(getAllReturnOffers.fulfilled,(state,action)=>{
      state.loading=false
      state.returnOffers= action.payload
      state.error= ""
  })
  builder.addCase(getAllReturnOffers.rejected,(state,action)=>{
      state.loading=false
      state.error= action.payload
      state.returnOffers=[]
  })
  





  // register user
builder.addCase(acceptOffer.pending, (state) => {
    state.isAccepted=false

  });
  builder.addCase(acceptOffer.fulfilled,(state)=>{
    state.isAccepted=true

  })
  builder.addCase(acceptOffer.rejected,(state,action)=>{
    state.isAccepted=false
    state.error=action.payload

  })


},  
});

export const {clearErrors}=clientReducer.actions
export default clientReducer.reducer