'use strict';
const database = require('../../scripts/constants/database.js');
const masterdb = require('../../scripts/constants/masterdb.js');

module.exports = (req, res) => {

	const id = req.body.employee_id;
	const dbQuery = database.resumes.collection('Resumes');

	dbQuery.find({'employee_id':id},{'employee_id':1}).count()
	.then((el)=>{
		if(el>0){
			console.log(el);
			dbQuery.findOne({'employee_id': id}, (err, result) => {
		    	if(err){
		    		return res.render('./error.ejs', {err: err});
		    	}

	        	const info = result;
				const databases = info.databases[0].split(',') || [];

				const technologies = info.technologies[0].split(',')||[];
				
				const server_side = info.server_side[0].split(',') || [];
				
				const front_end = info.front_end[0].split(',') ||[];
				
				console.log(server_side);
				
				return res.render('./editableform.ejs', {
								employee_name:info.employee_name,
								employee_position:info.employee_position,
								employee_location:info.employee_location,
								employee_id:info.employee_id,
								summary:info.summary,
								college:info.college[0],
								workex:info.workexperience[0],
								projects:info.projects[0],
								prior_projects:info.prior_projects[0],
								databases,
								technologies,
								server_side,
								front_end,
								proj:info.proj,
								prior_proj:info.prior_proj
				})	    
    		})
		}
		else{
			return res.render('./error.ejs');
		}

	})	

}
