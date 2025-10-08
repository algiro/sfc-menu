const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

// Use external volume path for menu data
const menuDataPath = path.join('/app/data', 'menuData.cjs');

// GET: return all menu data
router.get('/', (req, res) => {
    try {
        const menuData = require(menuDataPath);
        res.json(menuData);
    } catch (err) {
        console.error('Error loading menu data:', err);
        res.status(500).json({ error: 'Error loading menu data' });
    }
});

// POST: update a section
router.post('/', (req, res) => {
    const { section, entries } = req.body;
    if (!section || !entries) {
        return res.status(400).json({ error: 'Missing section or entries' });
    }

    try {
        const menuData = require(menuDataPath);
        menuData[section] = entries;

        const fileContent = `module.exports = ${JSON.stringify(menuData, null, 4)};`;
        fs.writeFileSync(menuDataPath, fileContent, 'utf-8');

        // Clear require cache so next GET will load updated data
        delete require.cache[require.resolve(menuDataPath)];

        res.json({ success: true });
    } catch (err) {
        console.error('Error updating menu data:', err);
        res.status(500).json({ error: 'Error updating menu data' });
    }
});

module.exports = router;
