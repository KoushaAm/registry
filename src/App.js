import './App.css';
import React, { useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './server/firebase-cofig.js'

function App() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  React.useEffect (() => {
  onAuthStateChanged (auth, (currentUser) => 
    setUser(currentUser))
  }, []);



  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch {
      console.error()
    }

  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log("loged in as: \n" + user);
    } catch {
      console.log("error")
    }
  }

  const signOut = async () => {
    try {
      await signOut(auth);
      setUser({});
      console.log("signed out as: \n" + user);
    } catch {
      console.log("error");
    }
  }

  




  return (
    <div className="App">
      <h2>Logged in as: </h2>
      {user?.email}
      {(user? <button className ="button2" onClick={signOut}><span>Sign out</span></button> : null)}

    <span>
      <div className='App--card'>
        <h1>Register</h1>
        <p className='p'>Email</p>
        <input 
        className='input'
        placeholder='Email'
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}/>
        
        <p className='p'>Password</p>
        <input title='Password' className='input'
        placeholder='Password...'
        onChange = {(event) => {
          setRegisterPassword(event.target.value);
        }}/>
        <button className ="button" onClick={register}><span>Register</span></button>
      </div>
    </span>

    <span>
      <div className='App--card'>
        <h1>Login</h1>
        <p className='p'>Email</p>

        <input className='input'
        placeholder='Email...'
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}/>

        <p className='p'>Password</p>
        <input title='Password' className='input'
        placeholder='Password...'
        onChange = {(event) => {
          setLoginPassword(event.target.value);
        }}/>

        <button className ="button" onClick={login}><span>Login</span></button>
      </div>
    </span>
    
    </div>
  );
}

export default App;
