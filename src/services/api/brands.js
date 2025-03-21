import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/brands";

const requestWithTimeout = async (method, url, data = null, timeout = 5000) => {
  const controller = new AbortController();
  const signal = controller.signal;

  //Abort the request if it takes more than the timeout
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
      const config = { 
          method, 
          url, 
          data, 
          signal, 
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          }
      };
      const response = await axios(config);
      clearTimeout(timeoutId);
      return response.data;
  } catch (error) {
      clearTimeout(timeoutId);
      if (axios.isCancel(error)) {
          console.error("Timeout error:", error);
      } else {
          console.error("Error while fetching data:", error.response ? error.response.data : error.message);
      }
      return null;
  }
};

export const brandsRequest = {
  getBrands: () => requestWithTimeout("GET", API_URL),
  createBrand: (newBrand) => requestWithTimeout("POST", API_URL, newBrand),
  updateBrand: (id, updateBrand) =>
    requestWithTimeout("PUT", `${API_URL}/${id}`, updateBrand),
  deleteBrand: (id) => requestWithTimeout("DELETE", `${API_URL}/${id}`),
  getbrandById: (id) => requestWithTimeout("GET", `${API_URL}/${id}`),
};
