import { useSelector } from 'react-redux';
import ContactForm from '../../components/contactForm';
import ContactList from '../../components/contactList';
import Filter from '../../components/filter';
import css from './Contacts.module.css';

const Contacts = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {items.length === 0 && <h2>No added numbers!</h2>}
      {items.length > 0 && <Filter />}
      {isLoading && <p className={css.loader}>Loading...</p>}
      {error && <p className={css.error}>{error}</p>}
      {items.length > 0 && <ContactList />}
    </div>
  );
};

export default Contacts;
