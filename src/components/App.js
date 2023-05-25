import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import('pages/home/Home'));
const Contacts = lazy(() => import('pages/contacts'));
const Register = lazy(() => import('pages/register/Register'));
const Login = lazy(() => import('pages/login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={Register} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={Login} />
            }
          />

          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={Contacts} />}
          />
        </Route>
      </Routes>
    )
  );
};
