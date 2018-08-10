let base64 = require('base-64');
import {request} from './../Omni';
const url = 'https://api.github.com';
const isSecured = url.startsWith('https');
const secure = isSecured ? '' : '&insecure=cool';
const cookieLifeTime = 120960000000;

const GitUserApi = {
  login: async (username, password) => {
    const _url = `${url}/authorizations?username=${username}&password=${password}`;
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
    return await request(_url, {
    method: 'GET',
    headers,
    username,
    password});
  }.
  getTrendingRepository: () => {
    const _url = `${url}/search/repositories?q=created:>2018-08-01&sort=stars&order=desc`;
    return request(_url, {
      method: 'GET',
    })

  }
};

export default GitUserApi;
