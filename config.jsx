/*
const {
    LOGINAPI_URL
  } = process.env;
  */
  const loginApiUrl = process.env.REACT_APP_LOGINAPI_URL || overmeli-loginapi.railway.internal


  console.log("Login Api URL: ", loginApiUrl)
  
  export { loginApiUrl };