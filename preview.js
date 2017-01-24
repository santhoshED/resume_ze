'use strict';
const database = require('./database.js');

module.exports = (req, res) => {
	const info = req.body;
	const databases = info.databases || "";

	var proj_images = new Array();

	if(info.proj){
		for(var i=0;i<info.proj.length;i++){
			var temp = new Array;
			if(info.proj[i].constructor === Array){
				for(var j=0;j<info.proj[i].length;j++)
					temp[j]=database.TECHNOLOGIES[info.proj[i][j]];
			}
			else{
				temp[0]=database.TECHNOLOGIES[info.proj[i]]
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
					temp[j]=database.TECHNOLOGIES[info.prior_proj[i][j]];
			}
			else{
				temp[0]=database.TECHNOLOGIES[info.prior_proj[i]]
			}
			prior_proj_images[i]=temp;	
		}
	}

	var databases_images = new Array();

	if(databases.constructor === Array){
		for(var i=0;i<databases.length;i++){
			databases_images[i] = database.TECHNOLOGIES[databases[i]];
		}
	}
	else if(databases.length>0){
		databases_images[0] = database.TECHNOLOGIES[databases];
	}

	const technologies = info.technologies||"";
	var technologies_images = new Array();

	if(technologies.constructor === Array){
		for(var i=0;i<technologies.length;i++){
			technologies_images[i] = database.TECHNOLOGIES[technologies[i]];
		}
	}
	else if(technologies.length>0){
		technologies_images[0] = database.TECHNOLOGIES[technologies];
	}
	const server_side = info.server_side || "";
	var server_side_images = new Array();

	if(server_side.constructor === Array){
		for(var i=0;i<server_side.length;i++){
			server_side_images[i] = database.TECHNOLOGIES[server_side[i]];
		}
	}
	else if(server_side.length>0){
		server_side_images[0] = database.TECHNOLOGIES[server_side];
	}
	const front_end = info.front_end ||"";
	var front_end_images = new Array();

	if(front_end.constructor === Array){
		for(var i=0;i<front_end.length;i++){
			front_end_images[i] = database.TECHNOLOGIES[front_end[i]];
		}
	}
	else if(front_end.length>0){
		front_end_images[0] = database.TECHNOLOGIES[front_end];
	}
	const summary = info.summary.split("\r\n");

	const colleges = info.college[0].name;
	var college_images = new Array();

	if(colleges.constructor === Array){
		for(var i=0;i<colleges.length;i++){
			college_images[i] = database.UNIVERSITIES[colleges[i]];
		}
	}
	else{
		college_images[0] = database.UNIVERSITIES[colleges];
	}

	res.render(__dirname + '/resume.ejs', {
					employee_name:info.employee_name,
					employee_position:info.employee_position,
					employee_location:info.employee_location,
					summary,
					college:info.college[0],
					college_images,
					workex:info.workexperience[0],
					projects:info.projects[0],
					prior_projects:info.prior_projects[0],
					databases_images:databases_images,
					technologies_images:technologies_images,
					server_side_images:server_side_images,
					front_end_images:front_end_images,
					proj_images
	})
};