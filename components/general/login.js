import React, { useContext, useState } from 'react'
import { MainContext } from '../context/mainContext';

const Login = () => {
    let { setAuthState, usersLogin, err } = useContext(MainContext);

    let initialState = {
        email: '',
        userName: '',
        password: ''
    }
    const [userDetail, setUserDetail] = useState(initialState);
    console.log(err, "13");
    //transition user
    const switchUser = (e) => {
        e.preventDefault();
        setAuthState({loginTab: false, signUpTab: true});
    }

    //handle password
    const handlePass = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUserDetail({
            ...userDetail, [name]: value
            });
    }

    //check for email or user name
    const handleChange = (e) =>{
        e.preventDefault();
        const { name, value } = e.target;
        let emailVerify = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]/g;
        value = name == 'email' ? value.toLowerCase().trim(): value.trim();
        let result = name == 'email' && emailVerify.test(value);
        setUserDetail({
            ...userDetail, 
            [name]: result == true ? value : '',
                userName: result == false ? value : ''
            });
    }

    //submit userDetails
    const submitLogin = async (e) => {
        e.preventDefault();
        const { email, userName, password } = userDetail;
        // login parameters
            const userInput = {
                userName,
                email,
                password
            };
            
            //login query
                const {data, error} = await usersLogin({
                    variables: {
                        userInput,
                    }
                });
                
    }
    
  return (
    <>
        <div className="login_left">
            <div className="side_background flex_column">
                <div className="log_reg-vec1 log_regvec"></div>
                <div className="log_reg-vec2 log_regvec"></div>
                <div className="log_reg-vec3 log_regvec"></div>
            </div> 
            <div className="login_main flex_show_row">
                <div className="login_header remove_margin">
                    <p>Sendit</p>
                    <p>Easy way to move things</p>
                </div>
                <div className="login_image">
                    <img src="img/v_large 1.png" alt=""/>
                </div>
            </div>
        </div>
        <div className="login_right">
            <div className="login_right_header remove_margin">
                <p>Login</p>
                <p>Sign in to gain access to more features</p>
            </div>
            <form>
                <div className={`login_form_row ${(err == `username or email can't be empty`) || (err == 'wrong username or email') ? 'error' : ''}`}>
                    <div className="username_wrapper flex_show_row">
                        <label>Email/Username</label>
                    </div>
                    <input placeholder="Email / Username" onChange={handleChange} name="email" type="text"/> 
                </div>
                <div className={`login_form_row ${err == 'invalid password' ? 'error' : ''}`}>
                    <div className="username_wrapper flex_show_row">
                        <label>Password</label>
                    </div>
                    <input placeholder="Password" onChange={handlePass} name="password" type="password"/> 
                </div>
                {err !== undefined && <p className='error'>{err}</p>}
                <div className="login_form_row">
                    <div className="checkbox_holder flex_show_row">
                        <div className="Remember">
                            <input type="checkbox"/>
                            <label>Remember me</label> 
                        </div>
                        <div className="reset_password">
                            <label>Forget password?</label>  
                        </div>
                    </div>
                    <div className="login_submit">
                        <p onClick={submitLogin}>Sign in</p>
                    </div>
                    <div className="login_sign_up flex_show_row">
                        <p>Dont have an account yet?</p><p onClick={switchUser}>Join now</p>
                    </div>
                </div>
                
            </form>
        </div>
    </>
  )
}

export default Login;
