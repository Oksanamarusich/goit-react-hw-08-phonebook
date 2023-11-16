
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
 

  useEffect(() => {
    dispatch(refreshUser());

  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<HomePage />} /> 
          <Route
            path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
          />
          <Route
            path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
          />
          <Route
            path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
          
        </Route>
      </Routes>
  );
};

//   return (<div>
//      <h1>Phonebook</h1>
//     <ContactForm />
//     {error && (<ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>)}  
//     <h2>Contacts</h2>
//     <Filter />
//     {isLoading && !error && <Loader />} 
//     <ContactList />
//   </div>
//   );
// };






