import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Reducers/AuthReducer';
import ApiReducer from './Reducers/ApiReducer';
import ServiceReducer from './Reducers/ServiceReducer';
import CartReducer from './Reducers/CartReducer';

export const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    ApiReducer: ApiReducer,
    ServiceReducer: ServiceReducer,
    CartReducer:CartReducer,
  },
});

export default store;
