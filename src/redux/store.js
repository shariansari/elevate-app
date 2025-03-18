import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Reducers/AuthReducer';
import ApiReducer from './Reducers/ApiReducer';
import ServiceReducer from './Reducers/ServiceReducer';

export const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    ApiReducer: ApiReducer,
    ServiceReducer: ServiceReducer
  },
});

export default store;
