import {configureStore,combineReducers} from "@reduxjs/toolkit"
import userReducer from "./reducers/userReducer"
import adminReducer from "./reducers/adminReducer"
import searchLawyers from "./reducers/searchReducer"
import clientReducer from "./reducers/clientReducer"
import lawyerReducer from "./reducers/lawyerReducer"



const reducer=combineReducers({

    User:userReducer,
    Admin:adminReducer,
    Search:searchLawyers,
    Client:clientReducer,
    Lawyer:lawyerReducer
})

const store =configureStore({
reducer
})

export default store