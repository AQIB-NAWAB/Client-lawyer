import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../request";

const initialState = {
  loading: false,
  clientRequests:[],
  sentOffers:[],
  acceptedoffers:[],
  error: "",
  isSent:false,
};  


// login the user
export const getClientRequests = createAsyncThunk("all/Client/Request/{Lawyer}", async ( data,{rejectWithValue } ) => {
  try {
    console.log(data);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const response = await axios.get(
      `${url}/lawyers/requests`,
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
// login the user
export const getAllSentOffer = createAsyncThunk("all/sent/Offers", async ( data,{rejectWithValue } ) => {
    try {
      console.log(data);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
  
      const response = await axios.get(
        `${url}/lawyers/sent/offers `,
        
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  });  




  // login the user
export const getAllAcceptedOffer = createAsyncThunk("all/accepted/Offers", async ( data,{rejectWithValue } ) => {
    try {
      console.log(data);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
  
      const response = await axios.get(
        `${url}/lawyers/accepted/offers`,
        
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  });  




  // Accept Offer
  export const sendOffer = createAsyncThunk("send/Offer", async ( {client_request_id,client_id,description,rate},{rejectWithValue } ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
  
      const response = await axios.post(
        `${url}/send-offer/${client_id}`,
        {description,rate,client_request_id},
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
        `${url}/custom/send-custom-request/`,
        {city,province,description,case_type,budget},
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  });  

const lawyerReducer = createSlice({
  name: "Lawyer",
  initialState,
  reducers: {
    clearErrors:(state,)=>{
      state.error="",
      state.isSent=false
    }
    
  },
  extraReducers: (builder) => {
    builder.addCase(getClientRequests.pending, (state) => {
      state.loading= true
      state.error= ""
      state.clientRequests=[]

    });
    builder.addCase(getClientRequests.fulfilled,(state,action)=>{
        state.loading=false
        state.clientRequests= action.payload
        state.error= ""
    })
    builder.addCase(getClientRequests.rejected,(state,action)=>{
        state.loading=false
        state.error= action.payload
        state.clientRequests=[]
    })
    
// register user
builder.addCase(getAllSentOffer.pending, (state) => {
    state.loading= true
    state.error= ""
    state.sentOffers=[]

  });
  builder.addCase(getAllSentOffer.fulfilled,(state,action)=>{
      state.loading=false
      state.sentOffers= action.payload
      state.error= ""
  })
  builder.addCase(getAllSentOffer.rejected,(state,action)=>{
      state.loading=false
      state.error= action.payload
      state.sentOffers=[]
  })
  


// register user
builder.addCase(getAllAcceptedOffer.pending, (state) => {
    state.loading= true
    state.error= ""
    state.acceptedoffers=[]

  });
  builder.addCase(getAllAcceptedOffer.fulfilled,(state,action)=>{
      state.loading=false
      state.acceptedoffers= action.payload
      state.error= ""
  })
  builder.addCase(getAllAcceptedOffer.rejected,(state,action)=>{
      state.loading=false
      state.error= action.payload
      state.acceptedoffers=[]
  })
  



  // register user
builder.addCase(sendOffer.pending, (state) => {
    state.isSent=false

  });
  builder.addCase(sendOffer.fulfilled,(state)=>{
    state.isSent=true

  })
  builder.addCase(sendOffer.rejected,(state,action)=>{
    state.isSent=false
    state.error=action.payload

  })


},  
});

export const {clearErrors}=lawyerReducer.actions
export default lawyerReducer.reducer    