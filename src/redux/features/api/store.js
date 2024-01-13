import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../tasks/tasksSlice';
import userSlice from '../user/userSlice';
import baseApi from './baseApi';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
    tasksSlice: tasksSlice,
    userSlice: userSlice,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(baseApi.middleware)
});

export default store;
