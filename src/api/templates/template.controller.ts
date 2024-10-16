import Template from "./template.modal";

export const createTemplate = async function (req, res) {
  const request = req.body;
    try {
      const newTemplate = await Template.create(request);
      if (newTemplate) {
        res.status(200).json({ status: "success", message: "Template saved successfully." });
      } else {
        res.status(400).json({ status: "error", message: "Error saving template." });
      }
    } catch (err) {
      res.status(500).json({ status: "error", message: "Server error", error: err });
    }
  };


  export const getAllTemplate = async function (req, res) {
    try {
      const data = await Template.find();
      if (data) {
        return res.status(200).json({ status: "success",message: "Found templates successfully", data: data});
      } else {
        return res.status(400).json({ status: "Error", message: "Error getting templates" });
      }
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err });
    }
  };

  export const getTemplateByName = async function (req, res) {
    const { templateName } = req.query;
    try {
        const template = await Template.findOne({ templateName });
        if (template) {
            res.status(200).json({ status: "success", template });
        } else {
            res.status(400).json({ status: "error", message: "Template not found" });
        }
    } catch (err) {
        res.status(500).json({ status: "error", message: "Server error", error: err });
    }
};
  