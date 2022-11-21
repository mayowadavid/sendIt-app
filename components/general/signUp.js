import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext';

const SignUp = () => {
    let { setAuthState } = useContext(MainContext);

    const login = (e) => {
        e.preventDefault();
        setAuthState({loginTab: true, signUpTab: false});
    }

  return (
    <>
    <div className="registration_left">
        <div className="side_background flex_column">
            <div className="reg-vec1 regvec"></div>
            <div className="reg-vec2 regvec"></div>
            <div className="reg-vec3 regvec"></div>
        </div> 
        <div className="side_main flex_column remove_margin">
            <p>Sendit</p>
            <p>Premium Movement</p>
            <img src="img/v_large 1.png" alt=""/>
        </div>
    </div>
    <div className="registration_right">
        <p>Registration</p>
        <p>Commission talented creatives the right way.</p>
        <p>Sign up to find, hire and track the progress of oil services more easily.</p>
        <form>
            <div className="form_row">
                <div className="username_wrapper flex_row">
                    <label>Username</label> <span>*your Username can not be changed</span>
                </div>
                <input placeholder="input your username here" type="text"/> 
            </div>
            <div className="form_row">
                <label>Email </label>
                <input placeholder="input your email here" type="text"/> 
            </div>
            <div className="form_row">
                <label>Password</label> 
                <input placeholder="password min 8 character" type="text"/>
            </div>
            <div className="form_row">
                <label>confirm Password</label> 
                <input placeholder="input your username here" type="text"/> 
            </div>
            <div className="form_row">
                <div className="checkbox_holder flex_row">
                    <input type="checkbox"/>
                    <label>I agree to the Terms and policies.</label>  
                </div>
                <p>Create Account</p>
                <div className="login_sign_up flex_row">
                        <p>Have an account?</p><p onClick={login}>Login</p>
                    </div>
            </div>
            
        </form>
    </div>
</>
  )
}

export default SignUp