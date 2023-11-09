var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var furniture_controller = require('../controllers/furniture');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// furniture ROUTES ///
// POST request for creating a furniture.
router.post('/furniture', furniture_controller.furniture_create_post);
// DELETE request to delete furniture.
router.delete('/furniture/:id', furniture_controller.furniture_delete);
// PUT request to update furniture.
router.put('/furniture/:id', furniture_controller.furniture_update_put);
// GET request for one furniture.
router.get('/furniture/:id', furniture_controller.furniture_detail);
// GET request for list of all furniture items.
router.get('/furniture', furniture_controller.furniture_list);
module.exports = router;