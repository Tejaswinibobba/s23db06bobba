var express = require('express');
const furniture_controlers= require('../controllers/furniture');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET furniture */
router.get('/', furniture_controlers.furniture_view_all_Page);   
/* GET detail furniture page */
router.get('/detail', furniture_controlers.furniture_view_one_Page);
/* GET create furniture page */
router.get('/create', furniture_controlers.furniture_create_Page);
module.exports = router;
/* GET create update page */
router.get('/update', furniture_controlers.furniture_update_Page);
/* GET delete  page */
router.get('/delete', furniture_controlers.furniture_delete_Page);
/* GET update furniture page */
router.get('/update', secured, furniture_controlers.furniture_update_Page);
module.exports = router;





