//  import { createStore, combineReducers, applyMiddleware } from 'redux'
//  import thunk from 'redux-thunk'
//  import { composeWithDevTools } from 'redux-devtools-extension'

//  import { userLoginReducer } from './reducers/userReducers'

//   const reducer = combineReducers({

// userLogin : userLoginReducer

//   })

//   const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   :null

//   const initialState = {
//     userLogin : {userinfo: userInfoFromStorage },
//   }

//   const middleware = [thunk]
//   const store = createStore(reducer,initialState,composeWithDevTools
//     (applyMiddleware(...middleware)))

//     export default store\



import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  userDetailsReducer,
  userUpdateProfileReducer
} from "./reducers/userReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
 
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;



const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  adminLogin: { adminInfo: adminInfoFromStorage },
};


const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
