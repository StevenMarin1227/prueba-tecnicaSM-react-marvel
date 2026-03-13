const VALID_EMAIL = "admin@admin.com";
const VALID_PASSWORD = "Admin";

export const login = (email, password) => {
  return email === VALID_EMAIL && password === VALID_PASSWORD;
};

export const saveSession = () => {
  localStorage.setItem("isAuth", "true");
};

export const logout = () => {
  localStorage.removeItem("isAuth");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuth") === "true";
};