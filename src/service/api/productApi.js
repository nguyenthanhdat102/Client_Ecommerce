import http from "../http";

export const getProducts = (config) => {
   return http.get('/product', config);
}

export const getProduct = (id, config) => {
   return http.get('/product/' + id, config)
}