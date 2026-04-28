// API client — centralises the base URL and error handling so every fetch
// call in the app doesn't need to repeat this boilerplate.

// REACT_APP_API_BASE_URL is set per-environment in .env.development.local / Vercel env vars.
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = {
  // Sends a GET request to BASE_URL + path and returns the parsed JSON body.
  // Throws an error for any non-2xx response so callers can handle failures consistently.
  get: (path) =>
    fetch(`${BASE_URL}${path}`).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }),
};

export default api;
