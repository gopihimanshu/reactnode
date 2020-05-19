let knexConfig = require('../../knexfile');
let knex = require('knex')(knexConfig);

class Employee {
    static getAllEmployees(){
        return new Promise((resolve, reject) => {
            knex.select()
            .from('employees')
            .then((result, error) => {
                if(error) throw error;

                resolve(result);
            })
            .catch((error) => {
                reject(error);
            })
        })
    }
}

module.exports = Employee;