import React, { createContext, useState, useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { CURRENT_USER, FETCH_USER_BY_NAME, LOGIN } from '../queries/user/user';
import { useRouter } from 'next/router';
import { UPDATE_PROFILE } from '../mutation/profile/profile';
import { clean } from '../functions/function';
import { CREATE_PACKAGE } from '../mutation/package/package';
import { CURRENT_PACKAGE } from '../queries/package/package';
import { CREATE_CATEGORY, SUB_CATEGORY, UPDATE_CATEGORY } from '../mutation/categories/category';
import { CREATE_BLOG, UPDATE_BLOG } from '../mutation/blog/blog';
import axios from "axios";
import { FIND_BLOG_BY_NAME } from '../queries/blog/blog';
import { useDataQuery } from '../functions/customHook';


export const MainContext = createContext();
const MainContextProvider = (props) => {

  // router
  const router = useRouter();

  //control dashboard sidebar
  const sideControl = {
    profile: true,
    billing: false,
    transactions: false,
    settings: false,
    track: false,
    packages: false,
    referral: false,
    inbox: false,
    notification: false
  };

  // control login/signup
  let authControl = {
    loginTab: true,
    signUpTab: false
  }

  //USER DATA
  const initialUser = {
    id: '',
    userName: '',
    email: '',
    refreshToken: '',
    refreshTokenExp: '',
    profile: {
        id: '',
        file: {
          image: '',
        },
        role: '',
       }
  }

  // to control active dashboard option
  const statusControl = {
    overview: true,
    details: false,
    preview: false,
    amount: false
  };

  // to control active dashboard animation
  const statusCheck = {
    overview: false,
    details: false,
    preview: false,
    amount: false
  };

  // to control subscription pop up
  const subscriptionPop = {
    default: true,
    mainPop: false,
    deposit: false,
    withdraw: false,
    cancelPop: false
  }
  
  const [userData, setUserData] = useState(initialUser);
  const [subscriptionPopState, setSubscriptionPopState] = useState(subscriptionPop);
  const [menu, setMenu] = useState(false);
  const [sideState, setSideState] = useState(sideControl);
  const [statusState, setStatusState] = useState(statusControl);
  const [statusStateCheck, setStatusStateCheck] = useState(statusCheck);
  const [modalIndex, setModalIndex] = useState(1);
  const [modalControl, setModalControl] = useState(false);
  const [authState, setAuthState] = useState(authControl);
  const [err, setErr] = useState();
  const [profileUrl, setProfileUrl] = useState();
  const [temporaryImage, setTemporaryImage] = useState([]);
  const [liveImage, setLiveImage] = useState([]);
  const [imgPreviewIndex, setImgPreviewIndex] = useState(0);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const firstInitial = {
    senderName: '',
    senderPhoneNumber: '',
    senderEmail: '',
    senderGender: '',
    receiverName: '',
    receiverAddress: '',
    receiverPhoneNumber: '',
    receiverEmail: '',
    receiverGender: '',
    pickUp: '',
    destination: ''
}
const [senderData, setSenderData] = useState(firstInitial);



// QUERIES
// user by name
const [userFetch] = useLazyQuery(FETCH_USER_BY_NAME, {
  onCompleted: (data) => {
      if(data){
      const { findUserByName } = data;
      setUserData(findUserByName);
      console.log(data);
      }
  },
  onError: (error) => {
    setErr(error);
    console.log(error)
  }
});

// signed in user
const [fetchUsers] = useLazyQuery(CURRENT_USER, {
  onCompleted: (data) => {
      if(data){
      const { currentUser } = data;
      console.log(currentUser);
      let {profile} = currentUser;
      const res = clean({...currentUser});
      profile = clean({...profile});
      profile?.file?.image !== undefined && setProfileUrl(profile?.file?.image);
      setUserData({...userData, ...res, profile});
      }
  },
  onError: (error) => {
    // setErr(error.message);
    console.log(error.message)
  }
});

// login user
const [usersLogin] = useLazyQuery(LOGIN, {
  fetchPolicy: "network-only",
  onCompleted: (data) => {
      if(data){
        console.log(data);
      const { loginUser } = data;
      setUserData(loginUser);
      setErr();
      if(data !== undefined){
        const {userName, profile, refreshTokenExp, refreshToken} = loginUser;
          const token = refreshToken;
          const { role } = profile;
          window.localStorage.setItem("role", JSON.stringify(role));
          window.localStorage.setItem("token", JSON.stringify(token));
          window.localStorage.setItem("session", JSON.stringify(refreshTokenExp));
          router.push(`/${userName}`);
      }
      
      //console.log(data);
      }
  },
  onError: (error) => {
    //setErr(error);
    const message = error.message;
    setErr(message);
  }
});

// current package to sent
const [currentPackage] = useLazyQuery(CURRENT_PACKAGE, {
  onCompleted: ({currentUserpackage}) => {
    //const {currentUserpackage} = data;
    console.log(currentUserpackage);
      if(currentUserpackage){
        //console.log(currentPackage);
        setSenderData({...currentUserpackage});
      }
  },
  onError: (error) => {
    //setErr(error);
    const message = error.message;
    setErr(message);
  }
});

// find blog by name
const { runQuery: findSingleBlog } = useDataQuery(FIND_BLOG_BY_NAME);

//MUTATIONS
const [updateProfile] = useMutation(UPDATE_PROFILE, {
  onCompleted: (data) => {
      if(data){
      console.log(data);
      }
  },
  onError: (error) => {
    //setErr(error);
    const message = error.message;
    setErr(message);
  }
});

const [createPackage] = useMutation(CREATE_PACKAGE, {
  onCompleted: (data) => {
      if(data){
      console.log(data);
      }
  },
  onError: (error) => {
    //setErr(error);
    const message = error.message;
    setErr(message);
  }
});

//create category
const [createCategory] = useMutation(CREATE_CATEGORY, {
  onCompleted: (data) => {
      console.log(data);
  },
  onError: (error)=> {
      console.log(error);
  }
})

// create sub category
const [createSubCategory] = useMutation(SUB_CATEGORY, {
  onCompleted: (data) => {
      console.log(data);
  },
  onError: (error)=> {
      console.log(error);
  }
})

//create blog
const [createBlog] = useMutation(CREATE_BLOG, {
  onCompleted: (data) => {
      console.log(data);
  },
  onError: (error)=> {
      console.log(error);
  }
})

//create blog
const [updateBlog] = useMutation(UPDATE_BLOG, {
  onCompleted: (data) => {
      console.log(data);
  },
  onError: (error)=> {
      console.log(error);
  }
})

//get login user details if token is not empty
useEffect(()=>{
  const token = localStorage.getItem('token');
  token !== undefined && fetchUsers();
}, []);




  return (
    <MainContext.Provider value={{
      axios,
      sideState, 
    setSideState,
    statusState, 
    setStatusState,
    statusStateCheck, 
    setStatusStateCheck,
    subscriptionPopState, 
    setSubscriptionPopState,
    menu, 
    setMenu,
    modalIndex, 
    setModalIndex,
    modalControl, 
    setModalControl,
    authState, 
    setAuthState,
    userFetch,
    usersLogin,
    err,
    setErr,
    router,
    userData,
    updateProfile,
    profileUrl,
    createPackage,
    currentPackage,
    senderData, 
    setSenderData,
    temporaryImage, 
    setTemporaryImage,
    imgPreviewIndex, 
    setImgPreviewIndex,
    liveImage, 
    setLiveImage,
    formError, 
    setFormError,
    loading,
    setLoading,
    createCategory,
    createSubCategory,
    createBlog,
    findSingleBlog,
    updateBlog,
    }}>
        {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider