import React, { useContext } from 'react'
import { MainContext } from '../components/context/mainContext';
import Login from '../components/general/login';
import SignUp from '../components/general/signUp';

const Auth = () => {
  const {authState} = useContext(MainContext);
  return (
    <div className="registration_page flex_row">
        { authState.loginTab == true && <Login /> }
        { authState.signUpTab == true && <SignUp /> }
    </div>
  )
}

export default Auth;