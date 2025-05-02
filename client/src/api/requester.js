const API_URL = import.meta.env.VITE_API_URL;

async function requester(method, endpoint = "", data) {
  const fetchOptions = {
    method,
    headers: {},
  };

  if (data) {
    fetchOptions.headers["Content-Type"] = "application/json";
    fetchOptions.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(API_URL + endpoint, fetchOptions);

    if (!response.ok) {
      const error = await response.json();

      if (error.code == 403) {
        // TODO: clear user data - for logout;
      }

      throw new Error(error.message);
      // TODO: add logic for error handling
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    // TODO: add logic for error handling
    console.error(error);
    throw error;
  }
}

export const get = (endpoint) => requester("GET", endpoint);
export const post = (endpoint, data) => requester("POST", endpoint, data);
export const put = (endpoint, data) => requester("PUT", endpoint, data);
export const del = (endpoint) => requester("DELETE", endpoint);
