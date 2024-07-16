
const express = require("express");
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 4000;

app.use(cors({
  origin:["http://localhost:3000" , "https://master--automationfrontend.netlify.app/"],
  credentials:true
}));


// middleware
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(express.json());

const Profile = require("./routes/User");
app.use("/api/v1", Profile);


app.listen(PORT, () => {
  console.log("app start at port 4000");
});

app.get("/", (req, res) => {
  res.send("this is an get app");
});

