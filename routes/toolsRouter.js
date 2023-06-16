const express = require("express");
const router = express.Router();
const toolsController = require("../controllers/toolsController");
router.get("/", toolsController.getToolsController);

router.post("/", toolsController.postToolsController);

router.get("/:id", toolsController.getSpecificTools);
router.delete("/:id", toolsController.deleteTools);
module.exports = router;
