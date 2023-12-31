import Swal from "sweetalert2";
import axios from 'axios';

// authenticate users
export const authentication = (router) => {
  const token = localStorage.getItem("token");
  token == undefined && router.push("/auth");
  let session = JSON.parse(localStorage.getItem("session"));
  let role = JSON.parse(localStorage.getItem("role"));
  let res = session?.split("/");
  const date = new Date();
  const today = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const expiredDay = res !== undefined && parseInt(res[2]);
  const expiredMonth = res !== undefined && parseInt(res[1]);
  const expiredYear = res !== undefined && parseInt(res[0]);

  //check login expired date and month
  if (month >= expiredMonth && today > expiredDay && year > expiredYear) {
    router.push("/auth");
    localStorage.clear();
  }

  if (role) {
    return role;
  }
};

//clean objects
export const clean = (obj) => {
  for (const prop in obj) {
    if (
      obj[prop] === null ||
      obj[prop] === undefined
    ) {
      delete obj[prop];
    }
  }
  return obj;
};

// validate form
export const formValidation = (obj, setFormError) => {
  const errors = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined || value.length == 0) {
      const errorMessage = `Can't be empty`;
      errors = { ...errors, [key]: errorMessage };
    }
  }
  setFormError(errors);
  return { errors };
};

//upload image
export const uploadImage = (axios, file) => {
  try {
    if (!file[0]) return;
    let formData = new FormData();
    formData.append("file", file[0]);
    return axios.post(
      `${process.env.NEXT_PUBLIC_url}/files/imageUpload`,
      formData
    );
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: `${error.message}`,
    });
  }
};

//sweet alert message
export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

//generate id
export const generateId = () => {
  const characters = `00000000abcdefghijklmnopqrstuvwxyz`;
  let uniqueId = '';

  while (uniqueId.length < 5) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters[randomIndex];

    if (!uniqueId.includes(randomChar)) {
      uniqueId += randomChar;
    }
  }

  return uniqueId;
};

// this is a helper function to get related data
export const fetchDataQuery = (query, queryName) => {
  query(queryName, {
    onCompleted: (data) => {
      if (data) {
        console.log(data);
        //return data;
        //const { allBlogPost } = data;
        //setBlogRow(allBlogPost);
      }
    },
    onError: (error) => {
      //setErr(error);
      console.log(error);
    },
  });
  queryName();
};

// to remove unnecesssary markdown
export const removeSpecialCharacters = (string) => {
  // Regular expression pattern to match special characters
  let pattern = /[^a-zA-Z0-9\s]/g;

  // Remove special characters using the pattern
  let result = string.replace(pattern, "");

  return result;
};

export const makeQuery = async (queryName, queryParams, queryVariable) => {
  try {
    let result;
    if (queryParams) {
      await queryName({
        variables: {
          [queryVariable]: queryParams,
        },
        onCompleted: (data) => {
          return (result = data);
        },
        onError: (error) => {
          error &&
            Toast.fire({
              icon: "error",
              title: `${error.message}`,
            });
        },
      });
    } else {
      return queryName();
    }
    return result;
  } catch (error) {
    error &&
      Toast.fire({
        icon: "error",
        title: `${error.message}`,
      });
  }
};

// create mutation
// createName is function name
// createvariable is variable name
// create data is actual data to be sent
export const createMutation = async (
  createName,
  createVariable,
  createData
) => {
  try {
    return createName({
      variables: {
        [createVariable]: {
          ...createData,
        },
      },
    });
  } catch (error) {
    error &&
      Toast.fire({
        icon: "error",
        title: `${error.message}`,
      });
  }
};


export const deleteMutation = async (
  createName,
  createVariable,
  deleteData
) => {
  try {
    return createName({
      variables: {
        [createVariable]: deleteData,
      },
    });
  } catch (error) {
    error &&
      Toast.fire({
        icon: "error",
        title: `${error.message}`,
      });
  }
};

// update mutation
// updateId will be passed as an object
// updateVariableName is a string
// updateName is a function
// updateData is an array of objects

export const updateQuery = async (
  updateId,
  updateVariableName,
  updateName,
  updateData
) => {
  const track = [];
  let error;
  for (let x = 0; x < updateData.length; x++) {
    try {
      const data = await updateName({
        variables: {
          [updateVariableName]: {
            ...updateId,
            ...updateData[x],
          },
        },
      });
      track.push(data);
      console.log(data);
    } catch (e) {
      error = e.message;
      console.log(e.message);
    }
  }
  console.log('track', track);
  //when data update is successful
  track.length === updateData.length &&
    error == undefined &&
    Toast.fire({
      icon: "success",
      title: "Successfull",
    });
  //when an error occured
  error &&
    Toast.fire({
      icon: "error",
      title: `${error}`,
    });

  return track;
};

export const formatDate = (date) => {
  // Months array
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the components of the date
  var month = months[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();

  // Format the date string
  var formattedDate = month + " " + day + ", " + year;

  return formattedDate;
};


// method GET, PUT, DEL ...
// url endpoint url
// data if using a get or put request
 export const Axios = async (method, url, data) => {
  // console.log(method, url, data)
    const token = localStorage.getItem("token") || '';
    const baseUrl = process.env.NEXT_PUBLIC_url;
    url = baseUrl + url;
    data =  data || {};
    let headers = {Accept: 'application/json',
            'content-Type': 'application/json',
        'authorization': `bearer ${token}` }
    
    try {
        if(method == 'get'){
            const config = {
                url,
                method,
                headers
            };
            return axios(config);
        }else {
            const config = {
                url,
                method,
                data,
                headers
            };
            return await axios(config);
        }
        
    }catch(e){
        console.log(e)
    }
}

//retrieve pagination data
export const paginate = (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
}

const isDecimalNumber = (value) => {
  return Number.isFinite(value) && !Number.isInteger(value);
}


// pagination list
export const retrievePaginateLength = (items, itemsPerPage) => {
  let itemsLength = items?.length > 0 && items.length/itemsPerPage;
  itemsLength = isDecimalNumber(itemsLength) ? itemsLength + 1 : itemsLength;
  const pagniateArrayLength = [];
  for(let x = 1; x <= itemsLength; x++){
    pagniateArrayLength.push(x);
  }
  return pagniateArrayLength;
}