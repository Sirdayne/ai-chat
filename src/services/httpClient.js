import axios from "axios";

const tokenLocalStorageName = 'ai-chats-token'

export const getToken = () => {
  return localStorage.getItem(tokenLocalStorageName)
}

export const httpPrivate = axios.create({
  baseURL: import.meta.env.VITE_APP_API_HOST_PRIVATE,
  timeout: 99999,
  headers: {'Authorization': 'Bearer ' + getToken() }
});

export const httpPublic = axios.create({
  baseURL: import.meta.env.VITE_APP_API_HOST_PUBLIC,
  timeout: 99999
})

export const setToken = (token) => {
  localStorage.setItem(tokenLocalStorageName, token)
}

export const removeToken = () => {
  localStorage.removeItem(tokenLocalStorageName)
}

export const logout = () => {
  removeToken();
}
