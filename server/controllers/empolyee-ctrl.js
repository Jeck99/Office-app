const employees = require('../models/employee-model');

const getAll = async (req, res) => {
    await employees.find()
    .then((result) => res.send(result))
    .catch(err => res.status(404).send({ massage: err }));
}
const getOne = (req, res) => {
    await employees.findById(req.params.id)
    .then((result) => res.send(result))
    .catch(err => res.status(404).send('The employee with the given ID was not found.'));
}
const create = (req, res) => {
    await employees.create(req.body)
    .then((result) => res.send(result))
    .catch(err => res.status(404).send({err}));
}
const update = (req, res) => {
    const employee = employees.find(employee => employee.id === parseInt(req.params.id));
    if (!employee) {
        res.status(404).send('The employee with the given ID was not found.');
    }
    const { name, salary, department } = req.body;
    employee.name = name;
    employee.salary = salary;
    employee.department = department;
    res.send(employee);
}
const deleteOne = (req, res) => {
    const employee = employees.find(employee => employee.id === parseInt(req.params.id));
    if (!employee) {

        res.status(404).send('The employee with the given ID was not found.');
    }
    const index = employees.indexOf(employee);
    employees.splice(index, 1);
    res.send(employee);
}
module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}
