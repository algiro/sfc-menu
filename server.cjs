const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const menuDataApi = require('./src/api/menuData');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/menuData', menuDataApi);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
