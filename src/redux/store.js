import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
