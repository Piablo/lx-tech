console.log("Starting server...");


const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const morgan = require("morgan");
const {sequelize} = require('./models');
const path = require('path');

//Init app
const app = express();

app.use(cors());
//app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json({ extented: false }));

const uploadRoute = require("./public/uploads")
app.use("/api/upload", uploadRoute)

// app.post("/api/test", (req, res) => {
//     console.log(req.body);
// })



require('./routes')(app);

sequelize.sync()
.then(() => {
    app.listen(process.env.API_PORT);
    console.log("Api server started on " + process.env.API_PORT);
})
