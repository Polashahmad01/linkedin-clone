import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Login.css';
import { auth } from '../firebase/firebase';
import { login } from '../features/userSlice';

const Login = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ profilePic, setProfilePic ] = useState('');
    const dispatch = useDispatch()

    const registerUser = (e) => {
        e.preventDefault();
        if(!name) {
            alert("Please enter your full name");
        }

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoUrl: profilePic,
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    }))
                })
            })
            .catch(error => alert(error));    
    };

    const loginUser = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }))
            })
            .catch(error => alert(error));
    }

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt=""/>
            <form>
                <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} type="text"/>
                <input placeholder="Profile pic URL (optional)" value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text"/>
                <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                <button type="submit" onClick={loginUser}>Sign In</button>
            </form>
            <p>Not a Member Yet?{" "}
                <span onClick={registerUser} className="login__register">Register Now</span>
            </p> 
        </div>
    )
}

export default Login
