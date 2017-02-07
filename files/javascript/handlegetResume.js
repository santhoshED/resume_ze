'use strict';
const database = require('../../scripts/constants/database.js');
const masterdb = require('../../scripts/constants/masterdb.js');

module.exports = (req, res) => {

	const id = req.body.employee_id;
	const dbQuery = database.resumes.collection('Resumes');

	dbQuery.find({'employee_id':id},{'employee_id':1}).count()
	.then((el)=>{
		if(el>0){
			dbQuery.findOne({'employee_id': id}, (err, result) => {
		    	if(err){
		    		return res.render('./error.ejs', {err: err});
		    	}

	        	const info = result;
				

				var proj_images = new Array();
				if(info.proj){
					for(var i=0;i<info.proj.length;i++){
						var temp = new Array;
						if(info.proj[i].constructor === Array){
							for(var j=0;j<info.proj[i].length;j++)
								temp[j]=masterdb.TECHNOLOGIES[info.proj[i][j]];
						}
						else{
							temp[0]=masterdb.TECHNOLOGIES[info.proj[i]]
						}
						proj_images[i]=temp;
						
					}	
				}
				var prior_proj_images = new Array();

				if(info.prior_proj){
					for(var i=0;i<info.prior_proj.length;i++){
						var temp = new Array;
						if(info.prior_proj[i].constructor === Array){
							for(var j=0;j<info.prior_proj[i].length;j++)
								temp[j]=masterdb.TECHNOLOGIES[info.prior_proj[i][j]];
						}
						else{
							temp[0]=masterdb.TECHNOLOGIES[info.prior_proj[i]]
						}
						prior_proj_images[i]=temp;	
					}
				}

				const databases = info.databases || "";
				var databases_images = new Array();

				if(databases.constructor === Array){
					for(var i=0;i<databases.length;i++){
						databases_images[i] = masterdb.TECHNOLOGIES[databases[i]];
					}
				}
				else if(databases.length>0){
					databases_images[0] = masterdb.TECHNOLOGIES[databases];
				}

				const technologies = info.technologies||"";
				var technologies_images = new Array();

				if(technologies.constructor === Array){
					for(var i=0;i<technologies.length;i++){
						technologies_images[i] = masterdb.TECHNOLOGIES[technologies[i]];
					}
				}
				else if(technologies.length>0){
					technologies_images[0] = masterdb.TECHNOLOGIES[technologies];
				}
				const server_side = info.server_side || "";
				var server_side_images = new Array();

				if(server_side.constructor === Array){
					for(var i=0;i<server_side.length;i++){
						server_side_images[i] = masterdb.TECHNOLOGIES[server_side[i]];
					}
				}
				else if(server_side.length>0){
					server_side_images[0] = masterdb.TECHNOLOGIES[server_side];
				}
				const front_end = info.front_end ||"";
				var front_end_images = new Array();

				if(front_end.constructor === Array){
					for(var i=0;i<front_end.length;i++){
						front_end_images[i] = masterdb.TECHNOLOGIES[front_end[i]];
					}
				}
				else if(front_end.length>0){
					front_end_images[0] = masterdb.TECHNOLOGIES[front_end];
				}

				const colleges = info.college[0].name;
				var college_images = new Array();

				if(colleges.constructor === Array){
					for(var i=0;i<colleges.length;i++){
						college_images[i] = masterdb.UNIVERSITIES[colleges[i]];
					}
				}
				else{
					college_images[0] = masterdb.UNIVERSITIES[colleges];
				}
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
								databases:info.databases||[],
								technologies:info.technologies||[],
								server_side:info.server_side||[],
								front_end:info.front_end||[],
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
