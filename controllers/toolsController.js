const toolsData = require("../models/toolsModel");

const getToolsController = async (req, res) => {
  console.log(toolsData);
  console.log("Get Tools Router");
  res.send(toolsData);
};

const postToolsController = async (req, res) => {
  console.log(req.body);
  const data = req.body;
  toolsData.push(data);
  res.send(toolsData);
  console.log("post tools router");
};
const getSpecificTools = async (req, res) => {
  console.log(req.params);
  const query = req.params.id;
  const data = toolsData.find((x) => x.id == query);
  res.send(data);
};

const deleteTools = async (req, res) => {
  console.log("Delete router");
};
module.exports = {
  getToolsController,
  postToolsController,
  getSpecificTools,
  deleteTools
};
