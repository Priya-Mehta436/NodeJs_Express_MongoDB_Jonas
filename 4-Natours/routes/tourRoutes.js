const express = require('express');

const tourController = require('../controllers/tourController');
const Router = express.Router();

Router.param('id',tourController.checkID);

// create a checkBody middleware
// check if the body contains the name and price property
// if not, send back 400 (bad request)
// add it to the post handler stack



Router.route('/')
   .get(tourController.getAllTours)
   .post(tourController.checkBody, tourController.createTour);
   
Router.route('/:id')
   .get(tourController.getTour)
   .patch(tourController.updateTour)
   .delete(tourController.deleteTour);

module.exports = Router;