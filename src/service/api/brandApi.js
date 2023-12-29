import http from "../http";

export const getBrands = (config) => {
   return http.get("/brand", config);
};

export const getBrand = (id, config) => {
   return http.get("/brand/" + id, config);
};

export const createBrand = (data, config) => {
   return http.post("/brand", data, config);
};

export const updateBrand = (id, data, config) => {
   return http.put("/brand/" + id, data, config);
};

export const deleteBrand = (id, config) => {
   return http.patch("/brand/" + id, config);
};
