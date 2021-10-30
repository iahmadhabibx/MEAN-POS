const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pos")
    .then(res => console.log(`Connection established with datatabse`))
    .catch(err => console.log(`Error occurred while connecting to database`))