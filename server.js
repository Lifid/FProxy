const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000; // important for hosting!

app.use(cors());

app.get('/friends/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const response = await axios.get(`https://friends.roblox.com/v1/users/${userId}/friends`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch friends.' });
    }
});

app.listen(port, () => {
    console.log(`Proxy running at http://localhost:${port}`);
});
