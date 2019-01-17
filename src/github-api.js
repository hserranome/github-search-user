import axios from "axios";

// Documentation is at https://developer.github.com/v3/
const BASE_URL = "https://api.github.com";

export { getRepos, getUserData };

//Added basic Auth
const AuthToken = process.env.REACT_APP_GIT_TOKEN || null
let axiosConfig
if(AuthToken !== null){
  axiosConfig = {headers: {
    Authorization: `token ${AuthToken}`
  }}
}

function getRepos(username) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url, axiosConfig).then(response => response.data);
}

function getUserData(username) {
  return axios
    .all([
      axios.get(`${BASE_URL}/users/${username}`, axiosConfig),
      axios.get(`${BASE_URL}/users/${username}/orgs`, axiosConfig)
    ])
    .then(([user, orgs]) => ({
      user: user.data,
      orgs: orgs.data
    }))
    .catch((error) => {
      console.log(error.response)
      return error.response
    });
}
