import { createSlice } from '@reduxjs/toolkit';

const contacstSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [{ id: 'f5ybWe73j', name: 'contact1', number: '123456789' }],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      // console.log('state', state);
      // console.log('state.contacts', state.contacts);
      // console.log(action.payload);
      state.contacts.push(action.payload);

      // state.contacts.push({
      //   id: shortid.generate(),
      //   name: action.payload.name,
      //   number: action.payload.number,
      // });
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contacstSlice.actions;
export default contacstSlice.reducer;
