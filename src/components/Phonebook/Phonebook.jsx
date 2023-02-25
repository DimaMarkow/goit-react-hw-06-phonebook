import { useSelector, useDispatch } from 'react-redux';

import css from './phonebook.module.css';
import ContactForm from 'components/Phonebook/ContactForm/ContactForm';
import ContactList from 'components/Phonebook/ContactList/ContactList';
import Filter from 'components/Phonebook/Filter/Filter';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import {
  getAllContacts,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const Phonebook = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const AllContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    const normalizedName = data.name.toLowerCase();
    const repeatedContact = AllContacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (repeatedContact) {
      const alertString = data.name + ' is already in contacts.';
      alert(alertString);
      return;
    }

    dispatch(addContact({ ...data }));
  };

  const onDeleteContact = idForDelete => {
    dispatch(deleteContact(idForDelete));
  };

  const filterHandler = data => {
    dispatch(setFilter(data.value));
  };

  const isContacts = Boolean(filteredContacts.length);

  return (
    <div className={css.wrapper}>
      <ContactForm onSubmit={formSubmitHandler} />
      <Filter handleFilter={filterHandler} filterValue={filter}></Filter>

      {isContacts && (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        ></ContactList>
      )}
      {!isContacts && <p>No contacts in the list</p>}
    </div>
  );
};

export default Phonebook;

// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

// import css from './phonebook.module.css';
// import ContactForm from 'components/Phonebook/ContactForm/ContactForm';
// import ContactList from 'components/Phonebook/ContactList/ContactList';
// import Filter from 'components/Phonebook/Filter/Filter';

// const INITIAL_STATE = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const Phonebook = () => {
//   const [contacts, setContacts] = useState(() => {
//     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
//     return parsedContacts ? parsedContacts : INITIAL_STATE;
//   });
//   const [filter, setFilter] = useState('');

//   const formSubmitHandler = data => {
//     const contactID = nanoid();
//     const newContact = { ...data, id: contactID };

//     const normalizedName = newContact.name.toLowerCase();

//     const repeatedContact = contacts.some(
//       contact => contact.name.toLowerCase() === normalizedName
//     );
//     const alertString = newContact.name + ' is already in contacts.';
//     if (repeatedContact) {
//       alert(alertString);
//       return;
//     }

//     setContacts(prevState => [...prevState, newContact]);
//   };

//   const filterHandler = data => setFilter(data.value);

//   const deleteContact = idForDelete => {
//     setContacts(prevState =>
//       prevState.filter(contact => contact.id !== idForDelete)
//     );
//   };

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );

//   return (
//     <div className={css.wrapper}>
//       <ContactForm onSubmit={formSubmitHandler} />
//       <Filter handleFilter={filterHandler} filterValue={filter}></Filter>
//       <ContactList
//         contacts={visibleContacts}
//         onDeleteContact={deleteContact}
//       ></ContactList>
//     </div>
//   );
// };

// export default Phonebook;
