import Patient from "./patientData.modal";

export const patient = async function (req, res) {
  const request = req.body;
  const { email } = req.body;
  try {
    const user = await Patient.findOne({ email });
    if(!user){
      const createdRequest = await Patient.create(request);
      if (createdRequest) {
        res.status(200).json({ status: "success", message: "Patient created successfully." });
      } else {
        res.status(400).json({ status: "Error", message: "Error in created patient." });
      }
    } else {
      res.status(400).json({ status: "Error", message: "Email already exists." });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const getPatient = async function (req, res) {
  try {
    const data = await Patient.find();
    if (data) {
      return res.status(200).json({
        status: "success",
        message: "Found patients successfully",
        data: data,
      });
    } else {
      return res.status().json({
        status: "Error",
        message: "Error getting patients data",
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const getPatientById = async function (req, res) {
    const { id } = req.params;
    try {
      const contact: any = await Patient.findById({ _id: id });
      if (contact) {
        return res.status(200).json({
          status: 'success',
          message: 'Fetched patient data successfully',
          data: contact
        });
      }
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err });
    }
  }

export const updatePatient = async function (req, res) {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedDocument = await Patient.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedDocument) {
      return res.status(404).json({ message: "Patient data not found" });
    }
    res
      .status(200)
      .json({ message: "Patient data updated successfully", data: updatedDocument });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const deletePatient = async function (req, res) {
  try {
    const { id } = req.params;
    const removeContact = await Patient.findByIdAndDelete({ _id: id });
    if (removeContact) {
      return res.status(200).json({
        status: "success",
        message: "Patient deleted successfully",
      });
    } else {
      return res.status().json({
        status: "Error",
        message: "Error in deleting patient",
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
