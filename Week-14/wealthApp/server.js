const express = require('express');
const app = express();
port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: false }));
const router = require('./routes/user-routes');
const mongoose = require('mongoose');

app.use("/wealth", router);

mongoose.connect(
    'mongodb://localhost:27017/wealth'
    ).then(() => app.listen(port)
    ).then(() => console.log(`connected to DB & listening on ${port}`)
    ).catch((e) => console.log(e));

