var furniture = require('../models/furniture');

//List of all furniture
exports.furniture_list = async function(req, res) {
try{
thefurniture = await furniture.find();
res.send(thefurniture);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// VIEWS
// Handle a show all view
exports.furniture_view_all_Page = async function(req, res) {
    try{
    thefurniture = await furniture.find();
    res.render('furniture', { title: 'furniture Search Results', results: thefurniture });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle furniture create on POST.
    exports.furniture_create_post = async function(req, res) {
    console.log(req.body)
    let document = new furniture();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.itemName = req.body.itemName;
    document.quantity = req.body.quantity;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// List of all furniture
/*exports.furniture_list = function(req, res) {
res.send('NOT IMPLEMENTED: furniture list');
};*/
// for a specific furniture.
exports.furniture_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await furniture.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle furniture create on POST.
/*exports.furniture_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: furniture create POST');
};*/
// Handle furniture delete form on DELETE.
exports.furniture_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle furniture update form on PUT.

exports.furniture_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await furniture.findById( req.params.id)
// Do updates of properties
if(req.body.itemName)
toUpdate.itemName = req.body.itemName;
if(req.body.quantity) toUpdate.quantity = req.body.quantity;
if(req.body.cost) toUpdate.cost = req.body.cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};