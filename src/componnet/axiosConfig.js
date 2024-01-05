// axios.js

// Import Axios library
import axios from 'axios'

// Create an instance of Axios with a baseURL
const instance = axios.create({
  baseURL: 'http://localhost:5500/api', // Add the protocol (http or https)
});

// Export the Axios instance
export default instance;
