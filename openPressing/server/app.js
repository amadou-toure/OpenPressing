const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
app.use(bodyParser);
app.use(express.json());
app.listen(PORT,()=>{
    console.log('server listening on port '+PORT);
})
