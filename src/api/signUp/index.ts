import express from 'express';
const router = express.Router();
import * as controller from './signUp.controller'

router.post('/signUp', controller.createUser);
router.post('/login',controller.login)

export = router