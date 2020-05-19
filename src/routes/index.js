const express = require('express');
const router = express.Router();

const Employee = require('../db/connectToDb');

router.get('/', (req, res) => {
    Employee.getAllEmployees()
        .then((result) => {
            console.log(result);
            res.render('index', {
                createdBy: 'Himanshu Kumar',
                employeeDetails: result
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router;