import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContacts } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/selectors';

export const InputForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(getContacts);

  const dispatch = useDispatch();

  const getName = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const addContact = (name, number) => {
    const contact = { name, number };
    const isFound = contacts.find(el => el.name === name);
    isFound
      ? alert(`${name} is already in contacts`)
      : dispatch(createContacts(contact));
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form
      action=""
      style={{
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '8px',
        padding: '12px',
        border: 'solid 1px',
      }}
      onSubmit={onSubmit}
    >
      <h3>Name</h3>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={getName}
          value={name}
        />
      </label>
      <h3>Number</h3>
      <label htmlFor="number">
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={getName}
          value={number}
        />
      </label>
      <button type="submit" style={{ width: '100px', marginTop: '16px' }}>
        Add Contact
      </button>
    </form>
  );
};
