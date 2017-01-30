'use strict';

var proj = 1;
var prior_proj= 1;

function renderUniversities(){
	const universities = Object.keys(database.UNIVERSITIES);
	for(var i=0;i<universities.length;i++){
		$("#CollegeSelect").append(`<option>${universities[i]}</option>`);
	}
}
function renderSkills(){

	const technologies = Object.keys(database.TECHNOLOGIES).sort();
	for(var i=0;i<technologies.length;i++){
		$(".skillSelect").append(`<option>${technologies[i]}</option>`);
	}
}
function renderProjectTechnologies(){
	const full_stack = Object.keys(database.TECHNOLOGIES).sort();
	for(var i=0;i<full_stack.length;i++){
		$("#fullStackSelect").append(`<option>${full_stack[i]}</option>`);
		$("#prior_fullStackSelect").append(`<option>${full_stack[i]}</option>`);
	};					
}
function addCollegeBlock(){
	var node=document.createElement("div");
	node.className= "education_block form-group";
	
	var selectelem_1 = document.createElement("select");
	selectelem_1.className="selectpicker form-control education-group";
	selectelem_1.setAttribute("id","CollegeSelect");
	selectelem_1.setAttribute("title","College Name");
	selectelem_1.setAttribute("data-live-search","true");
	selectelem_1.setAttribute("name","college[][name]");

	const universities = Object.keys(database.UNIVERSITIES);
	for(var i=0;i<universities.length;i++){
		var option = document.createElement("option");
		option.text = universities[i];
		selectelem_1.add(option);
	}

	node.appendChild(selectelem_1);
	node.innerHTML += 	`<input 
							class="form-control education-group" 
							type="text" 
							name="college[][degree]"
							placeholder="Degree"/>
						<input 
							class="form-control education_year" 
							type="text" 
							name="college[][year]"
							placeholder="Graduation Year"/>`;
	document.getElementById("education").appendChild(node);

	$('.selectpicker').selectpicker('render');
	renderUniversities();
}
function addWorkBlock(){
	var node = document.createElement("div");
	node.className="work_experience_block input-group form-group";
	node.innerHTML += 
					`<div class="work_experience_block input-group form-group">
						<input 
							class="form-control work-group" 
							type="text" 
							name="workexperience[][designation]"
							placeholder="Designation"/>
						<input 
							class="form-control work-group" 
							type="text" 
							name="workexperience[][organisation]"
							placeholder="Organisation Name"/>
						<div class="input-group work-group">
						  <input 
						  	type="text" 
						  	class="form-control"
						  	name="workexperience[][from]" 
						  	placeholder="Month, Year">
						  <span class="input-group-addon">To</span>
						  <input 
						  	type="text" 
						  	class="form-control"
						  	name="workexperience[][to]" 
						  	placeholder="Month, Year">
						</div>
						<input 
							class="form-control" 
							type="text" 
							name="workexperience[][place]"
							placeholder="City, Country"/>
					</div>`;
	document.getElementById('work_experience').appendChild(node);
}

function addProjectBlock(){
	var node = document.createElement("div");
	node.className="form-group project_block";
	node.innerHTML += `<div class="input-group project-group">
								<input 
									class="form-control" 
									type="text" 
									name="projects[][name]"
									placeholder="Project Name"/>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Description:</p>
								<textarea 
									class="form-control" 
									type="text" 
									name="projects[][description]" 
									rows="6"></textarea>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Approach:</p>
								<textarea 
									class="form-control" 
									type="text" 
									name="projects[][approach]" 
									rows="5"></textarea>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Contribution:</p>
								<textarea 
									class="form-control" 
									type="text" 
									name="projects[][contribution]"  
									rows="3"></textarea>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Duration:</p>
								<input 
								class="form-control" 
								type="text" 
								name="projects[][duration]"
								placeholder="Duration"/>
							</div>`;

	var selectdiv = document.createElement("div");
	selectdiv.className="input-group project-group";
	
	var side_heading = document.createElement("p");
	side_heading.className = "side-heading";
	side_heading.innerHTML= "Technologies:";

	var selectelem = document.createElement("select");
	selectelem.className="selectpicker form-control";
	selectelem.setAttribute("multiple","true");
	selectelem.setAttribute("title","Technologies");
	selectelem.setAttribute("data-live-search","true");
	selectelem.setAttribute("name","proj["+(proj)+"]");
	
	const full_stack = Object.keys(database.TECHNOLOGIES).sort();
	for(var i=0;i<full_stack.length;i++){
		var option = document.createElement("option");
		option.text = full_stack[i];
		selectelem.add(option);
	}


	selectdiv.appendChild(side_heading);
	selectdiv.appendChild(selectelem);

	node.appendChild(selectdiv);

	document.getElementById('project').appendChild(node);

	$('.selectpicker').selectpicker('render');
	proj++;
}

function addPriorProjectBlock(){
	var node = document.createElement("div");
	node.className="form-group project_block";
	node.innerHTML += `<div class="input-group project-group">
								<input 
									class="form-control" 
									type="text" 
									name="prior_projects[][name]"
									placeholder="Project Name"/>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Description:</p>
								<textarea 
									class="form-control" 
									type="text" 
									name="prior_projects[][description]"  
									rows="6"></textarea>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Approach:</p>
								<textarea 
									class="form-control" 
									type="text" 
									name="prior_projects[][approach]"  
									rows="5"></textarea>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Contribution:</p>
								<textarea 
									class="form-control" 
									type="text" 
									name="prior_projects[][contribution]"  
									rows="3"></textarea>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Duration:</p>
								<input 
								class="form-control" 
								type="text" 
								name="prior_projects[][duration]"
								placeholder="Duration"/>
							</div>`;

	var selectdiv = document.createElement("div");
	selectdiv.className="input-group project-group";
	
	var side_heading = document.createElement("p");
	side_heading.className = "side-heading";
	side_heading.innerHTML= "Technologies:";

	var selectelem = document.createElement("select");
	selectelem.className="selectpicker form-control";
	selectelem.setAttribute("multiple","true");
	selectelem.setAttribute("title","Technologies");
	selectelem.setAttribute("data-live-search","true");
	selectelem.setAttribute("name",`prior_proj[${++prior_proj}]`);
	
	const full_stack = Object.keys(database.TECHNOLOGIES).sort();
	for(var i=0;i<full_stack.length;i++){
		var option = document.createElement("option");
		option.text = full_stack[i];
		selectelem.add(option);
	}


	selectdiv.appendChild(side_heading);
	selectdiv.appendChild(selectelem);

	node.appendChild(selectdiv);

	document.getElementById('prior_project').appendChild(node);

	$('.selectpicker').selectpicker('render');
	prior_proj++;
}
