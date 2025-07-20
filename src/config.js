// Read environment variable, first try import.meta.env (Vite), then process.env (Node)
const envPassword = typeof import.meta !== 'undefined' ? import.meta.env.VITE_SFC_MENU_ADMIN_PWD : process.env.SFC_MENU_ADMIN_PWD;
export const ADMIN_PASSWORD = envPassword || 'admin123';
