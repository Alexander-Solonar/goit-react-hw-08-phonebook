import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
const Home = lazy(() => import('pages/home/Home'));
const Contacts = lazy(() => import('pages/contacts'));
const Register = lazy(() => import('pages/register/Register'));
const Login = lazy(() => import('pages/login/Login'));

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
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
