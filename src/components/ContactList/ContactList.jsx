// import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={styles.btn}
            type="submit"
            onClick={() => dispatch(deleteContact({ id }))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
