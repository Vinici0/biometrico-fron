// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

//Para el tipado de los estados y el dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



