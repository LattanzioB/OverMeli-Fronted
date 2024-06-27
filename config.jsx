/*
const {
    LOGINAPI_URL
  } = process.env;
  */

  require('dotenv').config();

  const loginApiUrl = process.env.REACT_APP_LOGINAPI_URL 

  console.log("Login Api URL: ", loginApiUrl)
  
  export { loginApiUrl };