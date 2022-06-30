// Environmental variables
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT;
const BACKEND_PROTOCOL = process.env.REACT_APP_BACKEND_PROTOCOL;
const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST;

// URLS
const AUTH_BASE_URL = `${BACKEND_PROTOCOL}://${BACKEND_HOST}:${BACKEND_PORT}/auth`;

export {
    AUTH_BASE_URL
};