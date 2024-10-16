import express from 'express';
const router = express.Router();
import * as controller from './template.controller'

router.post('/createTemplate', controller.createTemplate);
router.get('/getAllTemplate', controller.getAllTemplate)
router.get('/getTemplateByName', controller.getTemplateByName);

export = router