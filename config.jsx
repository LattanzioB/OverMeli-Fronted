const {
    LOGINAPI_URL
  } = process.env;

  const loginApiUrl = LOGINAPI_URL || 'http://localhost:8000'
  console.log("Login Api URL: ", loginApiUrl)
  
  export { loginApiUrl };