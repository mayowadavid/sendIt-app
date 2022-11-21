export const authentication = (router) => {
    const token = localStorage.getItem('token');
    token == undefined && router.push('/auth');
    let session = JSON.parse(localStorage.getItem('session'));
    let res = session?.split('/');
    //console.log(res);
    const date = new Date();
    const today = date.getDate();
    let expiry = res !== undefined && Math?.floor(res[2]);
    //console.log(router);
    if((today < expiry) == false){
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