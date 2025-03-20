import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/categories";

const requestWithTimeout = async (method, url, data = null, timeout = 5000) => {
  const controller = new AbortController();
  const signal = controller.signal;

  //Abort request after timeout
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const config = { method, url, data, signal };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error("Timeout error:", error);
    } else {
      console.error("Error while fetching data:", error);
    }
  } finally {
    clearTimeout(timeoutId);
  }
};

export const categoriesRequest = {
  getCategories: () => requestWithTimeout("GET", API_URL),
  createCategory: (newCategory) =>
    requestWithTimeout("POST", API_URL, newCategory),
  updateCategory: (id, updatedCategory) =>
    requestWithTimeout("PUT", `${API_URL}/${id}`, updatedCategory),
  deleteCategory: (id) => requestWithTimeout("DELETE", `${API_URL}/${id}`),
  getCategoryById: (id) => requestWithTimeout("GET", `${API_URL}/${id}`),
};
