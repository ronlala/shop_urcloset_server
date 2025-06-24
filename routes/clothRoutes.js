const express = require("express");
const router = express.Router();


const { getAllClothing, getClothing,createClothing,updateClothing,deleteClothing} = require("../controllers/clothController");

router.get("/", getAllClothing);

  router.get("/:id", getClothing);

  router.post("/create/new", createClothing);

  router.put("/update/:id", updateClothing);
  
  router.delete("/delete/:id", deleteClothing);
  
 

module.exports = router;
