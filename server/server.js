const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

const payload = {
    id: user._id
};
const userToken = jwt.sign(payload, process.env.SECRET_KEY);


app.use(cookieParser());
res.cookie("mycookie", "mydata", { httpOnly: true }).json({
    message: "This response has a cookie"
});

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
require('./config/mongoose.config');
require('./routes/cosplay.routes')(app);
require('./routes/task.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
