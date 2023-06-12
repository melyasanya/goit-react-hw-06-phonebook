const { createSlice, nanoid } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContacts: {
      prepare: contact => ({ payload: { ...contact, id: nanoid() } }),
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
    },
    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContacts, deleteContacts } = contactsSlice.actions;
