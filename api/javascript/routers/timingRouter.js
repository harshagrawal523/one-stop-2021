const express = require('express');

const timingRouter = express.Router();
const Controller = require('../controllers/timingController');

timingRouter.get('/getferrytiming', Controller.getferrytiming);
timingRouter.post('/createferrytiming', Controller.createferrytiming);
timingRouter.put('/updateferrytiming/:id', Controller.updateferrytiming);
timingRouter.delete('/deleteferrytiming/:id', Controller.deleteferrytiming);

timingRouter.get('/getbustiming', Controller.getbustiming);
timingRouter.post('/createbustiming', Controller.createbustiming);
timingRouter.put('/updatebustiming/:id', Controller.updatebustiming);
timingRouter.delete('/deletebustiming/:id', Controller.deleteferrytiming);

module.exports = { timingRouter };
