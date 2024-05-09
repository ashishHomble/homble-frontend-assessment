import axios from "axios";

//GET - get all products - /api/products
//GET - get product by ud - /api/products/:id
//POST - create product - /api/products - Content Type - "application/json"
//GET - get dashboard data - /api/dashboard

const envBaseUrl = "";

const instance = axios.create({
  baseURL: envBaseUrl,
});

export const getRequest = async (url, params = {}, responseType = "json") => {
  return instance.get(url, {
    params,
    responseType,
  });
};

export const postRequest = async (url, data, options) => {
  if (options && options.contentType) {
    instance.defaults.headers["Content-Type"] =
      options.contentType === "multipart/form-data"
        ? undefined
        : options.contentType;
  }
  const response = await instance.post(url, data);
  instance.defaults.headers["Content-Type"] = "application/json";
  return response;
};
