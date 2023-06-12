import { useDispatch, useSelector } from 'react-redux';
import { createContacts, deleteContacts } from 'redux/contacts/contactsSlice';
import { addFilter } from 'redux/filter/filterSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { InputForm } from './InputForm/InputForm';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('STATE')) || [];
  // });

  const { contacts } = useSelector(getContacts);

  const { filter } = useSelector(getFilter);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('STATE', JSON.stringify(contacts));
  // }, [contacts]);

  const addContact = (name, number) => {
    const contact = { name, number };
    const isFound = contacts.find(el => el.name === name);
    isFound
      ? alert(`${name} is already in contacts`)
      : dispatch(createContacts(contact));
  };

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  const filterNames = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const getFilterInput = e => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <InputForm addContact={addContact} />
      <h1>Contacts</h1>
      <Filter getFilterInput={getFilterInput} filter={filter} />
      {contacts.length > 0 && (
        <Contacts contacts={filterNames()} handleDelete={handleDelete} />
      )}
    </>
  );
};
