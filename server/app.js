const express = require('express');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoute');
const ownerRoutes = require('./routes/ownerRoute');
const app = express();
const PORT = 3001;


app.use(cors())
app.use(express.json());
app.use('/clients',clientRoutes);
app.use('/owners',ownerRoutes);
app.listen(PORT,()=>{
    console.log('server listening on port '+PORT);
})
