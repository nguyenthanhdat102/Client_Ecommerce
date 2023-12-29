import http from "../http";

export const getCategories = (config) => {
   return http.get("/category", config);
};

export const getCategory = (id, config) => {
   return http.get("/category/" + id, config);
};

export const createCategory = (data, config) => {
   return http.post("/category", data, config);
};

export const updateCategory = (id, data, config) => {
   return http.put("/category/" + id, data, config);
};

export const deleteCategory = (id, config) => {
   return http.patch("/category/" + id, config);
};
