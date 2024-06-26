/*
const {
    LOGINAPI_URL
  } = process.env;
  */
  const loginApiUrl = process.env.REACT_APP_LOGINAPI_URL || "overmeli-loginapi-production.up.railway.app"

  console.log("Login Api URL: ", loginApiUrl)
  
  export { loginApiUrl };