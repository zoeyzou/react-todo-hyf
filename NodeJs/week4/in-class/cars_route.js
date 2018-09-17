const { Router } = require('express')
const Cars = require('./cars')
const my_cars = new Cars();

const cars_route = Router()
.get('/', (req, res) => {
    res.send(my_cars.getAll())
})
.get('/:id', (req, res) => {
    try {
        res.send(my_cars.getById(req.params.id))
    } catch (error) {
        res.status(404).end()
    }
})
.patch('/:id', (req, res) => {
    try {
        res.send(my_cars.edit(req.params.id, req.body))
    } catch (error) {
        res.status(404).end();
    }
})
.post('/', (req, res) => {
    res.send(my_cars.add(req.body));
})
.delete('/:id', (req, res) => {
    try {
        res.send(my_cars.delete(req.params.id))
    } catch (error) {
        res.status(404).end();
    }
})

module.exports = cars_route