function addCollegeBlock(){
	var node=document.createElement("div");
	node.className= "education_block form-group";
	
	var selectelem_1 = document.createElement("select");
	selectelem_1.className="selectpicker form-control";
	selectelem_1.setAttribute("title","College Name");
	selectelem_1.setAttribute("data-live-search","true");
	selectelem_1.setAttribute("name","college[][name]");
	
	var selectelem_2 = document.createElement("select");
	selectelem_2.className="selectpicker course form-control";
	selectelem_2.setAttribute("title","Course Name");
	selectelem_2.setAttribute("data-live-search","true");
	selectelem_2.setAttribute("name","college[][course]");

	node.appendChild(selectelem_1);
	node.appendChild(selectelem_2);
	node.innerHTML += `<div class="input-group">
								  <input 
								  	type="text" 
								  	class="form-control" 
								  	name="college[][from]"
								  	placeholder="Year">
								  <span class="input-group-addon">To</span>
								  <input 
								  	type="text" 
								  	class="form-control" 
								  	name="college[][to]"
								  	placeholder="Year">
								</div>`;
	document.getElementById("education").appendChild(node);

	$('.selectpicker').selectpicker('render');
								
}
function addWorkBlock(){
	var node = document.createElement("div");
	node.className="work_experience_block input-group form-group";
	node.innerHTML += 
		`<div class="work_experience_block input-group form-group">
								<input 
									class="form-control" 
									type="text" 
									name="workexperience[][designation]"
									placeholder="Designation"/>
								<input 
									class="form-control" 
									type="text" 
									name="workexperience[][organisation]"
									placeholder="Organisation Name"/>
								<div class="input-group">
								  <input 
								  	type="text" 
								  	class="form-control"
								  	name="workexperience[][from]" 
								  	placeholder="mon,year">
								  <span class="input-group-addon">To</span>
								  <input 
								  	type="text" 
								  	class="form-control"
								  	name="workexperience[][to]" 
								  	placeholder="mon,year">
								</div>
								<input 
									class="form-control" 
									type="text" 
									name="workexperience[][place]"
									placeholder="City,Country"/>
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
									maxlength="400" 
									rows="4"></textarea>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Contribution:</p>
								<textarea 
									class="form-control" 
									type="text" 
									name="projects[][contribution]" 
									maxlength="200" 
									rows="2"></textarea>
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
	selectelem.setAttribute("name","projects[][technologies]");
	var optionelem = document.createElement("option");
	optionelem.text="kiwi";
	selectelem.add(optionelem);

	selectdiv.appendChild(side_heading);
	selectdiv.appendChild(selectelem);

	node.appendChild(selectdiv);

	document.getElementById('project').appendChild(node);

	$('.selectpicker').selectpicker('render');
}