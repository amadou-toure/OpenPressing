const express = require('express');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoute');
const ownerRoutes = require('./routes/ownerRoute');
const pressingRoutes = require('./routes/pressingRoute');
const app = express();
const PORT = 3100;


app.use(cors())
app.use(express.json());
app.use('/clients/',clientRoutes);
app.use('/pressing',pressingRoutes)
app.use('/owners',ownerRoutes);
app.listen(PORT,()=>{
    console.log('server listening on port '+PORT);
})
