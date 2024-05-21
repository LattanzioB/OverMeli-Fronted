/*
const {
    LOGINAPI_URL
  } = process.env;
  */
  const loginApiUrl = process.env.LOGINAPI_URL || 'http://localhost:8000'
  console.log("Login Api URL: ", loginApiUrl)
  
  export { loginApiUrl };