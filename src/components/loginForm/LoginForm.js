import { useState } from 'react';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // const newContact = {
    //   id: nanoid(),
    //   name,
    //   number,
    // };
    // const normalizedName = newContact.name.toLowerCase();
    // const isName = items.some(
    //   ({ name }) => name.toLowerCase() === normalizedName
    // );
    // const isNumber = items.some(({ number }) => number === newContact.number);
    // if (isName) {
    //   alert(`${newContact.name} is already in contacts.`);
    //   return;
    // }
    // if (isNumber) {
    //   alert(`${newContact.number} is already in contacts.`);
    //   return;
    // }
    // dispatch(addContact(newContact));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Log in</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            required
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <button className={css.button} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
