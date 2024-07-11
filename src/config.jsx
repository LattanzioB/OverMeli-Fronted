
  const loginApiUrl = process.env.REACT_APP_LOGINAPI_URL || "http://localhost:8000"//"https://overmeli-loginapi-production.up.railway.app"

  const meliApiUlr = process.env.REACT_APP_MELIAPI_URL || "http://localhost:8010"//"https://overmeli-meliapi-production.up.railway.app"

  console.log("Login Api URL: ", loginApiUrl)
  
  export { loginApiUrl, meliApiUlr };