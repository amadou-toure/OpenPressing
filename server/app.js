const express = require('express');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoute');
const ownerRoutes = require('./routes/ownerRoute');
const pressingRoutes = require('./routes/pressingRoute');
const orderRoutes = require('./routes/orderRoute');
const path = "C:/Users/LENOVO/OpenPressing/server"
const app = express();
const PORT = 3001;


app.use(cors())
app.use(express.json());
app.use('/clients/',clientRoutes);
app.use('/pressing',pressingRoutes)
app.use('/owners',ownerRoutes);
app.use('/order',orderRoutes)
app.listen(PORT,()=>{
    console.log('server listening on port '+PORT);
})
app.get('/',(req,res)=>{
    res.sendFile(path+'/index.html')
})
