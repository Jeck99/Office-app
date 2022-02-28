const employeeCtrl = require('../controllers/empolyee-ctrl');
const employeeRouter = require('express').Router();
employeeRouter.get('/', employeeCtrl.getAll);
employeeRouter.get('/:id', employeeCtrl.getOne);
employeeRouter.post('/', employeeCtrl.create);
employeeRouter.put('/:id', employeeCtrl.update);
employeeRouter.delete('/:id', employeeCtrl.deleteOne);
module.exports = employeeRouter;
