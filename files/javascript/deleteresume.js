'use strict';
const database = require('../../scripts/constants/database.js');

module.exports = (req, res) => {
    const id = req.body.employee_id;

    database.resumes.collection('Resumes').deleteOne({ 'employee_id': id }).then(() => {
        console.log("deleted in database");
        return res.redirect('/');
    });

}