const express = require('express');

const clientRoutes = require('./routes/clientRoute')
const app = express();
const PORT = 3001;


app.use(express.json());
app.use('/clients',clientRoutes);
app.listen(PORT,()=>{
    console.log('server listening on port '+PORT);
})
