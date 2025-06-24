const express = require("express");
const router = express.Router();


const { getAllClothing, getClothing,createClothing,updateClothing,deleteClothing} = require("../controllers/clothController");

router.get("/", getAllClothing);

  router.get("/:_id", getClothing);

  router.post("/create/new", createClothing);

  router.put("/update/:_id", updateClothing);
  
  router.delete("/delete/:_id", deleteClothing);
  
 

module.exports = router;
