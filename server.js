const express = require('express');
const app = express();
let port = 8080;

app.get('/', (req, res) => {
    res.send(':)');
});

app.listen(port, () => console.log(`Server started at port ${port}`));
