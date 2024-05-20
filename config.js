const {
    LOGINAPI_URL
  } = process.env;

  const loginApiUrl = LOGINAPI_URL || 'http://localhost:8000'

  module.exports = {
    loginApiUrl
  };