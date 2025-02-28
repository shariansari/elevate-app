import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import AuthReducer from './Reducers/AuthReducer';
import ApiReducer from './Reducers/ApiReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    AuthReducer:AuthReducer,
    ApiReducer:ApiReducer
  },
});

export default store;
