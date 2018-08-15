import { request } from "./../Omni";

const base64 = require("base-64");

const url = "https://api.github.com";

const GitUserApi = {
  login: async (username, password) => {
    const _url = `${url}/authorizations?username=${username}&password=${password}`;
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Basic " + base64.encode(username + ":" + password)
    );
    return await request(_url, {
      method: "GET",
      headers,
      username,
      password
    });
  }
};

export default GitUserApi;
