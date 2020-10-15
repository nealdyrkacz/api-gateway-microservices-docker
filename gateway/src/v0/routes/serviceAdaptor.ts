const axios = require('axios');


export function serviceAdaptor(baseURL : string) : any{
  return axios.create({
    baseURL: baseURL,
  });
}