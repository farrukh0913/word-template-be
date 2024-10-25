import express from 'express';
const router = express.Router();
import * as controller from './patientData.controller'

router.post('/patient', controller.patient)
router.get('/getPatient' , controller.getPatient)
router.get('/:id/getPatientById', controller.getPatientById);
router.put('/:id/updatePatient', controller.updatePatient);
router.delete('/:id/deletePatient',  controller.deletePatient)

export = router