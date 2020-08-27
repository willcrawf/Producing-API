const Pizza = require('../../models/pizza')

module.exports = {
    create,
    delete: deletePizza,
    update,
    show,
    index
}

function create(req, res){
    Pizza.create(req.body)
        .then((pizza) => {
            res.status(201).json(pizza)
    })
}

function index(req, res){
    Pizza.find({}, (err, pizzas) => {
        res.status(200).json(pizzas)
    })
}

function show(req, res){
    Pizza.findById(req.params.id)
    .then((pizza) => {
        res.status(200).json(pizza)
    })
    
}
function update(req, res){
    Pizza.findByIdAndUpdate(req.params.id)
    .then((pizza) => {
        res.status(200).json(pizza)
    })
}
function deletePizza(req, res){
    Pizza.findByIdAndDelete(req.params.id)
    .then((pizza) => {
        res.status(201).json(pizza)
    })
}
