const express = require('express');
const router = express.Router();

// POST: authenticate admin user
router.post('/login', (req, res) => {
    const { password } = req.body;
    
    if (!password) {
        return res.status(400).json({ error: 'Password is required' });
    }

    // Get admin password from environment variable
    const adminPassword = process.env.VITE_SFC_MENU_ADMIN_PWD || 'admin123';
    
    if (password === adminPassword) {
        // In a real application, you would generate a JWT token here
        // For simplicity, we'll just return a success response
        res.json({ 
            success: true, 
            message: 'Authentication successful',
            token: 'authenticated' // Simple token for this implementation
        });
    } else {
        res.status(401).json({ 
            success: false, 
            error: 'Invalid password' 
        });
    }
});

// GET: verify authentication token (optional, for future use)
router.get('/verify', (req, res) => {
    const token = req.headers.authorization;
    
    if (token === 'Bearer authenticated') {
        res.json({ success: true, authenticated: true });
    } else {
        res.status(401).json({ success: false, authenticated: false });
    }
});

module.exports = router;