const express = require("express");
const router = express.Router();
const db = require("./../mySQL_db/models");
var multer = require('multer')
var path = require('path')
var bodyParser = require('body-parser');
router.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: "../public/uploads/",
    filename: function (req, file, cb) {
      cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({
    storage: storage,
    limits: { fileSize: 11000000 },
  }).single("myImage");
  router.post("/upload", function (req, res) {

    upload(req, res, function (err) {
      
       console.log(req.file.destination+ req.file.filename)
    
      console.log("Request file ---", req.file.destination+ req.file.filename); //Here you get file.
  
      console.log("Request file ---", req.file.path); //Here you get file.
      const url = req.file.destination+ req.file.filename
      db.Image.create({
        url:url,
      }).then((img) => res.send("img"));

      /*Now do where ever you want to do*/
      if (!err) {
        return res.send(200).end();
      }
    });
  });

//delete image
router.delete("/delete/:id", (req, res) => {
    db.Image.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => res.send("success"));
  });

//get all imges
router.get("/all", (req, res) => {
    db.Image.findAll().then((imges) => {
      res.send(imges);
    });
  });
  

  module.exports = router;