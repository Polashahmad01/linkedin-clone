import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import Feed from './component/Feed/Feed';
import Login from './component/Login/Login';
import Widget from './component/Widget/Widget';
import { selectUser, login, logout } from './component/features/userSlice';
import { auth } from './component/firebase/firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
        <Header />
        {!user ? (
            <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget /> 
          </div>
        )}
    </div>
  );
}

export default App;
