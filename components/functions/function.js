export const authentication = (router) => {
    const token = localStorage.getItem('token');
    token == undefined && router.push('/auth');
    let session = JSON.parse(localStorage.getItem('session'));
    let res = session?.split('/');
    //console.log(res);
    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth();
    const expiredDay = res !== undefined && parseInt(res[2]);
    const expiredMonth = res !== undefined && parseInt(res[1]);

    //check login expired date and month
    if((month >= expiredMonth) && (today > expiredDay)){
        router.push('/auth'); 
        localStorage.clear();
    }
};

export const clean = (obj) => {
    for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined || prop === '__typename') {
          delete obj[prop];
        }
      }
      return obj;
};

export const formValidation = (obj, setFormError) => {
  const errors = {};
  for (const [key, value] of Object.entries(obj)) {
    
      if (value === null || value === undefined || value.length == 0) {
        const errorMessage = `Can't be empty`;
        errors = {...errors, [key]: errorMessage};
      }
    }
    setFormError(errors);
    return {errors};
};