const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser =require('body-parser');
const api = require('./routes/picto.routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

app.use('/public', express.static('public'));
app.use('/api', api);



app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   
require('./config/mongoose.config');
require('./routes/cosplay.routes')(app);
require('./routes/task.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});


