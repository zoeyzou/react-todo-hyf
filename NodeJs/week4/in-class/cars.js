class Cars {
    constructor() {
        this.cars = []
        this.cars.push({
            color: 'green',
            model: '3 Series',
            brand: 'BMW'
        })
    }

    getAll() {
        return this.cars;
    }

    getById(id) {
        if (!this.cars[id]) throw Error(`Cannot find a car with ${id}`)
        return this.cars[id];
    }

    add(car) {
        this.cars.push(car);
        return this.cars;
    }

    edit(id, car_partial) {
        if (!this.cars[id]) throw Error(`Cannot find a car with ${id}`)
        this.cars[id] = { ...this.cars[id], ...car_partial }
        return this.cars;
    }

    delete(id) {
        if (!this.cars[id]) throw Error(`Cannot find a car with ${id}`)
        this.cars.splice(id, 1);
        return this.cars;
    }

}

module.exports = Cars;