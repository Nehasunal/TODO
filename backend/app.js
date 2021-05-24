const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");

const app = express();

// const uri="mongodb+srv://root:root@cluster0.46qdp.mongodb.net/node-angular?retryWrites=true&w=majority"
// mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
// .then(()=>{
//   console.log('connected')
// })
// .catch(()=>{
//   console.log('connection failed')
// });

const pool = new Pool({
  user: "omhrjeny",
  host: "xxxxx.elephantsql.com",
  database: "omhrjeny",
  password: "v1dRsCwHuAl_Tc5v14S--TuVnQ35VnZL",
  port: 5432
});
console.log("Successful connection to the database");

//se middleware fnction
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
