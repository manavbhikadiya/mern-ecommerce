const mongoose = require("mongoose");
require('dotenv').config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_URI, options)
  .then(() => {
    console.log("MongoDb connection Successful.");
  })
  .catch((error) => {
    console.error("Error Occured in Connection", error);
  });