import { useContext, useState, useEffect } from "react";
import Header from '../general/header'
import Sidebar from '../general/sidebar'
import { MainContext } from "../context/mainContext";

const Profile = () => {
    const { setSideState } = useContext(MainContext);
    const initialState = {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        imageUrl: "",
        error: {
            userNameError: "",
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            genderError: ""
        }
    };
    const [userProfile, setUserProfile] = useState(initialState);

    useEffect(()=> {
        setSideState({
            profile: true
        });
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setUserProfile({...userProfile, [name]: value});
    }

    const submitProfile = (e) => {
        e.preventDefault();
    }



  return (
    <div className="body_layout flex_row">
        <Sidebar />
        <div className="right_wrap xl10">
            <Header />
            <div className="inner_space xl-pad5">
                <div className="profile_greetings">
                    <p>Good Afternoon, David</p>
                    <p>Welcome Back</p>
                </div>
                <div className="profile_form flex_column">
                    <div className="user_profile">
                        <img src="svg/avatar.svg" alt=""/>
                    </div>
                    <div className="user_profile_form">
                        <form>
                            <div className="form_input_col sm10">
                                <p>User name</p>
                                <input type="text" onChange={handleChange} placeholder="user name" name="userName" value={userProfile.userName} />
                            </div>
                            <div className="form_input_col sm10">
                                <p>First Name</p>
                                <input type="text" onChange={handleChange} placeholder="first name" value={userProfile.firstName} name="firstName" /> 
                            </div>
                            <div className="form_input_col sm10">
                                <p>Last Name</p>
                                <input type="text" onChange={handleChange} placeholder="last name" value={userProfile.lastName} name="lastName" />
                            </div>
                            <div className="form_input_col sm10">
                                <p>Email Address</p>
                                <input type="text" onChange={handleChange} placeholder="email" value={userProfile.email} name="email" />
                            </div>
                            <div className="form_input_col sm10">
                                <p>Gender</p>
                                <select name="gender" defaultValue="Select Gender">
                                    <option defaultValue hidden>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="user_submit_action">
                        <p onClick={submitProfile}>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile