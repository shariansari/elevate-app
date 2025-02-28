import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Reducers/AuthReducer';
import ApiReducer from './Reducers/ApiReducer';

export const store = configureStore({
  reducer: {
    AuthReducer:AuthReducer,
    ApiReducer:ApiReducer
  },
});

export default store;
