import { useContext, useState, useEffect } from "react";
import Header from "../general/header";
import Sidebar from "../general/sidebar";
import { MainContext } from "../context/mainContext";
import ClientLayout from "../general/clientLayout";

const Profile = () => {
  const {
    setSideState,
    router,
    userData,
    updateProfile,
    profileUrl,
    loading,
    setLoading,
    axios
  } = useContext(MainContext);
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
      genderError: "",
    },
  };
  const [userProfile, setUserProfile] = useState(initialState);
  const greetingsArray = ["Morning", "Afternoon", "Evening"];
  const [greetIndex, setGreetIndex] = useState();
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {
    const { email, userName, profile } = userData;

    setUserProfile({ ...userProfile, email, userName, ...profile });
    setSideState({
      profile: true,
    });
    // hours of the day
    const hour = new Date().getHours();
    // check hours of the day to greet
    setLoading(false);
    if (hour < 12) {
      setGreetIndex(0);
    } else if (hour < 18) {
      setGreetIndex(1);
    } else {
      setGreetIndex(2);
    }
  }, [userData]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoading(false);
    setUserProfile({ ...userProfile, [name]: value });
  };

  const uploadImage = (datum, data, headers) => {
    for (let x = 0; x < data.length; x++) {
      const file = data[x];
      const profileId = datum.id;
      let formData = new FormData();
      formData.append("file", file);
      console.log(profileId);
      formData.append("profileId", profileId);
      axios
        .post(`${process.env.NEXT_PUBLIC_url}/profile/imageUpload`, formData, {
          headers,
        })
        .then((dat) => {
          dat !== undefined && console.log(dat);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleFile = async (e) => {
    e.preventDefault();
    const { files } = e.target;
    setProfileImage(files);
    setLoading(false);
    const token = localStorage.getItem("token");
    const headers = {
      authorization: token ? `Bearer ${JSON.parse(token)}` : "",
    };
    userProfile.id !== undefined &&
      (await uploadImage(userProfile, files, headers));
  };

  const submitProfile = async (e) => {
    e.preventDefault();
    const { id, userName, firstName, lastName, email, gender } = userProfile;
    const profileInput = {
      id,
      firstName,
      lastName,
      gender,
    };
    setLoading(true);
    //console.log(profileInput);
    const { data, error } = await updateProfile({
      variables: {
        profileInput,
      },
    });
    console.log(data);
    data && setLoading(false);
  };

  return (
    <ClientLayout>
      <div className="profile_greetings">
        <p>
          Good {greetingsArray[greetIndex]}, {userData.userName}
        </p>
        <p>Welcome Back</p>
      </div>
      <div className="profile_form flex_column">
        <div className="client_details">
          <input type="file" onChange={handleFile} id="profileImage" />
          <div className="user_profile">
            <label htmlFor="profileImage">
              <img src="svg/Upload_white.svg" alt="" />
              <p>Change image</p>
            </label>
            <label htmlFor="profileImage">
              <img
                alt="sendit"
                src={profileUrl !== undefined ? profileUrl : "svg/avatar.svg"}
              />
            </label>
          </div>
        </div>
        <div className="user_profile_form">
          <form>
            <div className="form_input_col sm10">
              <p>User name</p>
              <input
                type="text"
                className="sm10"
                onChange={handleChange}
                placeholder="user name"
                name="userName"
                value={userProfile.userName}
              />
            </div>
            <div className="form_input_col sm10">
              <p>First Name</p>
              <input
                type="text"
                className="sm10"
                onChange={handleChange}
                placeholder="first name"
                value={userProfile.firstName}
                name="firstName"
              />
            </div>
            <div className="form_input_col sm10">
              <p>Last Name</p>
              <input
                type="text"
                className="sm10"
                onChange={handleChange}
                placeholder="last name"
                value={userProfile.lastName}
                name="lastName"
              />
            </div>
            <div className="form_input_col sm10">
              <p>Email Address</p>
              <input
                type="text"
                className="sm10"
                onChange={handleChange}
                placeholder="email"
                value={userProfile.email}
                name="email"
              />
            </div>
            <div className="form_input_col sm10">
              <p>Gender</p>
              <select
                className="sm10"
                onChange={handleChange}
                name="gender"
                defaultValue="Select Gender"
              >
                <option defaultValue hidden>
                  {userProfile.gender}
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </form>
        </div>
        <div className="user_submit_action">
          <button
            className={loading == true ? "loading" : ""}
            onClick={submitProfile}
          >
            {loading == true && (
              <img className="load" src="/svg/loading.svg" alt="sendit" />
            )}
            { `  Submit`}
          </button>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Profile;
