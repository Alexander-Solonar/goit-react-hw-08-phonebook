import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from 'pages/home/Home';
import Contacts from '../pages/contacts';
import Register from 'pages/register/Register';
import Login from 'pages/login/Login';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};
