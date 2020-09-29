const express = require("express");
const app = express();
const db = require("./mySQL_db/models");
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const todoRoutes = require("./routes/todo-routes")
app.use("/api/todos",todoRoutes)

const galleryRoutes = require("./routes/galler-routes")
app.use("/api/images",galleryRoutes)

app.get("/",(req,res)=>{
  res.send("lol")
})


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
});