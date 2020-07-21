const express = require('express')
const ContributorController = require('./controllers/ContributorController')

const routes = express.Router()

routes.get("/contributors", ContributorController.index);
routes.get("/reset", ContributorController.reset);
routes.get("/totalContribution", ContributorController.percentage);
    
routes.post("/addContributor", ContributorController.store);

routes.delete("/removeContributor", ContributorController.remove);

routes.all(/.*/, (req, res) => {
   return res.status(400).json({
     "error":"Invalid Request"
    }) 
  }
)
//routes.get("/motive/:motiveNumber", MotiveController.show)

module.exports = routes