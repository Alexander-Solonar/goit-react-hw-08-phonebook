import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import AppBar from 'components/appBar/AppBar';

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
