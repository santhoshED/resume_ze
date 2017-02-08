function handleDelete(id){
	var form = document.createElement("form");
	form.setAttribute("method","POST");
	form.setAttribute("action","/delete");
	form.innerHTML += `<input  
			type="hidden" 
			name="employee_id"
			value=${id}>`;
	document.body.appendChild(form);
    form.submit();
}

function renderUniversitiesEdit(name ,index){
	const universities = Object.keys(database.UNIVERSITIES);
	for(var i=0;i<universities.length;i++){
		if(universities[i]===name){
			$(`#CollegeSelect_${index}`).append(`<option selected>${universities[i]}</option>`);
		}
		else{
			$(`#CollegeSelect_${index}`).append(`<option>${universities[i]}</option>`);
		}
		
	}
}

function renderTechnologiesEdit(names,index){

	const array_names =  names.split(',');
	$(`#${index}`).append(`<option selected class="tech_hack" value=""></option>`);

	const technologies = Object.keys(database.TECHNOLOGIES).sort();
	for(var i=0;i<technologies.length;i++){
		if(array_names.indexOf(technologies[i])>=0){
			$(`#${index}`).append(`<option selected="selected" value="${technologies[i]}">${technologies[i]}</option>`);
		}
		else{
			$(`#${index}`).append(`<option value="${technologies[i]}">${technologies[i]}</option>`);	
		}
		
	}
}

function renderskillsEdit(names,index){
	const array_names =  names.split(',');

	const technologies = Object.keys(database.TECHNOLOGIES).sort();
	for(var i=0;i<technologies.length;i++){
		if(array_names.indexOf(technologies[i])>=0){
			$(`#${index}`).append(`<option selected="selected" value="${technologies[i]}">${technologies[i]}</option>`);
		}
		else{
			$(`#${index}`).append(`<option value="${technologies[i]}">${technologies[i]}</option>`);	
		}
		
	}	
}

