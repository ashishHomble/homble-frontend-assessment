// src/axios.js
import axios from 'axios';

const envBaseUrl = 'https://frontend-assessment-server.onrender.com/api';

const instance = axios.create({
  baseURL: envBaseUrl,
});

export const getRequest = async (url, params = {}, responseType = 'json') => {
  try {
    const response = await instance.get(url, {
      params,
      responseType,
    });
    return response;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

export const postRequest = async (url, data, options) => {
  try {
    if (options && options.contentType) {
      instance.defaults.headers['Content-Type'] =
        options.contentType === 'multipart/form-data'
          ? undefined
          : options.contentType;
    }
    const response = await instance.post(url, data);
    instance.defaults.headers['Content-Type'] = 'application/json';
    return response;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

export default instance;
