import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/appBar/AppBar';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
