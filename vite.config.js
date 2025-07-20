import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load env file
dotenv.config()

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 5173,
        proxy: {
            '/api': 'http://backend:3001'
        }
    },
    define: {
        'process.env.SFC_MENU_ADMIN_PWD': JSON.stringify(process.env.SFC_MENU_ADMIN_PWD)
    }
})
