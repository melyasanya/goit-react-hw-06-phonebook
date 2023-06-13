import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { InputForm } from './InputForm/InputForm';

export const App = () => {
  const { contacts } = useSelector(getContacts);

  return (
    <>
      <h1>Phonebook</h1>
      <InputForm />
      <h1>Contacts</h1>
      <Filter />
      {contacts.length > 0 && <Contacts />}
    </>
  );
};
