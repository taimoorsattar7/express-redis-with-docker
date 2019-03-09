const express = require('express');
const app = express();




app.get('/', (req, res) => {
    res.send('Number of visits is 0');
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
