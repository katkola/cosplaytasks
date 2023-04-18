const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   
require('./config/mongoose.config');
require('./routes/cosplay.routes')(app);
require('./routes/task.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

app.use('/login', (req,res)=>{
    res.send({
        token: "test123"
    })
})

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));