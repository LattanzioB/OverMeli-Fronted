
  const loginApiUrl = process.env.REACT_APP_LOGINAPI_URL || "https://overmeli-loginapi-production.up.railway.app"

  const meliApiUlr = process.env.REACT_APP_MELIAPI_URP || "https://overmeli-meliapi-production.up.railway.app"

  console.log("Login Api URL: ", loginApiUrl)
  
  export { loginApiUrl, meliApiUlr };