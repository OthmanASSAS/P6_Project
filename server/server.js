const express = require("express");
require('dotenv').config()
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express! 🎉')
}) 

const {PORT} = process.env || 3030

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));