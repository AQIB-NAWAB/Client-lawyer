import {configureStore,combineReducers} from "@reduxjs/toolkit"
import userReducer from "./reducers/userReducer"
import adminReducer from "./reducers/adminReducer"
import searchLawyers from "./reducers/searchReducer"
import clientReducer from "./reducers/clientReducer"
import lawyerReducer from "./reducers/lawyerReducer"
import notificationReducer from "./reducers/notificationReducer"




const reducer=combineReducers({

    User:userReducer,
    Admin:adminReducer,
    Search:searchLawyers,
    Client:clientReducer,
    Lawyer:lawyerReducer,
    Notification:notificationReducer
})

const store =configureStore({
reducer
})

export default store