'use strict';

const database = {
	"UNIVERSITIES":{
		"Amrita University":"Amrita_Univ_logo.jpg",
		"BITS Pilani":"BITS_Pilani_Logo.png",
		"Indian Institute of Technology Roorkee":"IITR_New_Logo.jpg",
		"Indian Institute of Technology Bhuvaneshwar":"IIT_BHU_Logo.jpg",
		"Indian Institute of Technology Guwahati":"IIT_Guwahati_Logo.svg.png",
		"Indian Institute of Technology Kharagpur":"IIT_KGP_Logo.png",
		"Indian Institute of Technology Kanpur":"IIT_Kanpur_Logo.png",
		"Indian Institute of Technology Madras":"IIT_Madras_Logo.png",
		"ISM Dhanbad":"ISMDhanbadLogo.png",
		"JNTU Hyderabad":"JNTU_Logo.jpg",
		"IIIT Hyderabad":"Logo_IIIT_Hyd.jpg",
		"Mahatma Gandhi University":"Mahatma_Gandhi_University_logo.GIF",
		"University of Sydney":"Univ_of_Sydney_logo.png",
		"K L University":"logo_ K_L_Univ.png"
	}, 
	"TECHNOLOGIES":{
		"Airflow":"Airflow_WT.png",
		"Android":"Android_WT.png",
		 "Apache Spark":"Apache_Spark_WT.png",
		 "AWS Dynamo DB":"AWS_Dynamo_DB_WT.png",
		 "AWS RDS":"AWS_RDS_WT.png",
		 "Cassandra":"Cassandra_WT.png",
		 "Celery":"Celery_WT.png",
		 "Spring":"Spring_WT.png",
		 "Spring MVC":"Spring_MVC_WT.png",
		 "S3":"S3_WT.png",
		 "Druid":"Druid_WT.png",
		 "Hadoop":"hadoop_WT.png",
		 "HDFS":"HDFS_WT.png",
		 "Kafka":"Kafka_WT.png",
		 "Kibana":"Kibana_WT.png",
		 "MongoDB":"Mongo_DB_WT.png",
		 "MySQL":"MySQL_WT.png",
		 "Oracle DB":"Oracle_DB_WT.png",
		 "Oracle":"Oracle.png",
		 "PostgreSQL":"PostgreSQL_WT.png",
		 "Python Pandas":"python_pandas_WT.png",
		 "R":"R.png",
		 "Teradata":"TERADATA_WT.png",
		 "Yarn":"Yarn_WT.png",
		"Active Admin":"Active_Admin_WT.png",
		 "Angular2":"Angular2.png",
		 "Angular JS":"ANGULARJS_WT.png",
		 "ANTLR":"ANTLR_WT.png",
		 "Apiary Blueprints":"Apiary_Blueprints_WT.png",
		 "ASP.NET":"ASP.NET_WT.png",
		 "Backbone.JS":"Backbone.js.png",
		 "Bootstrap":"Bootstrap_WT.png",
		 "CHEF":"CHEF_WT.png",
		 "iOS Cocoa Touch":"Cocoa_touch.png",
		 "Crashlytics":"Crashlytics.png",
		 "D3.JS":"d3js_WT.png",
		 "Django":"django_WT.png",
		 "Ember JS":"Ember.JS_WT.png",
		 "EngineYard Deployments":"EngineYard_deployments_WT.png",
		 "ES6":"ES6.png",
		 "Express":"Express_WT.png",
		 "Ext JS":"Ext.js_WT.png",
		 "Foundation":"Foundation_WT.png",
		 "Hapi JS":"hapi.png",
		 "Highcharts":"Highcharts_WT.png",
		 "HTML CSS":"HTML_CSS.png",
		 "iOS Swift":"iOS_Swift_WT.png",
		 "JavaScript":"javascript_WT.png",
		 "jQuery":"jQuery_WT.png",
		 "JSP":"JSP_WT.png",
		 "JWT":"JWT_WT.png",
		 "Kendo":"Kendo_WT.png",
		 "Laravel":"Laravel_WT.png",
		 "Leaflet":"leaflet_WT.png",
		 "LoopBack":"LoopBack_WT.png",
		 "Node.JS":"node.js_WT.png",
		 "Objective-C":"Objective-C_WT.png",
		 "PERL":"Perl_WT.png",
		 "PHP":"PHP_WT.png",
		 "React JS":"React_JS_WT.png",
		 "React":"React.png",
		 "Restify":"Restify_WT.png",
		 "Script":"Script_WT.png",
		 "WebRTC":"WebRTC_WT.png",
		 "WPF":"WPF_WT.png",
		 "Xcode":"xcode_WT.png",
		 "XML":"XML_WT.png",
		"Adhearsion":"Adhearsion.png",
		 "Ansible":"Ansible_WT.png",
		 "Asterisk":"Asterisk_WT.png",
		 "AWS Lambda":"AWS_Lambda_WT.png",
		 "AWS SES":"AWS_SES_WT.png",
		 "Microsoft Azure":"AZURE_WT.png",
		 "Jenkins":"Jenkins_WT.png",
		 "Servlets":"Servlets.png",
		 "SSO-CAS":"SSO-CAS_WT.png",
		 "Weblogic":"Weblogic_WT.png",
		 "WebRTC":"WebRTC_WT.png",
		 "WebSphere":"WebSphere_WT.png",
		 "Amazon Web Services":"AWS_WT.png",
		 "C":"C_WT.png",
		 "C++":"C++_WT.png",
		 "Devops":"Devops_WT.png",
		 "Docker":"docker_WT.png",
		 "Elasticsearch":"Elasticsearch_WT.png",
		 "Flask Framework":"Flask_Framework_WT.png",
		 "Hibernate":"Hibernate_WT.png",
		 "iOS Framework":"iOS_Framework_WT.png",
		 "J2EE":"J2EE_WT.png",
		 "JBoss":"JBOSS_WT.png",
		 "JUnit":"JUnit_WT.png",
		 "LDAP":"LDAP_WT.png",
		 "Maven":"Maven.png",
		 "Netty":"Netty_WT.png",
		 "OSGI Framework":"Osgi_Framework_WT.png",
		 "Play":"Play_Framework_WT.png",
		 "Python":"python_WT.png",
		 "Realm-Swift":"Realm-Swift_WT.png",
		 "Ruby on Rails":"Ruby_On_Rails_WT.png",
		 "SAML":"SAML_WT.png",
		 "Scala":"Scala_WT.png",
		 "Scikit-learn":"Scikit-learn_WT.png",
		 "Selenium":"Selenium_WT.png",
		 "Shinobi Controls":"Shinobi_Controls_WT.png",
		 "SLR":"SLR_WT.png",
		 "Socket IO":"Socket_IO_WT.png",
		 "Sparkml":"Sparkml_WT.png",
		 "Spring Security":"Spring_Security_WT.png",
		 "Tensorflow":"Tensorflow_WT.png",
		 "Twilio":"Twilio_WT.png",
		 "Uber rides":"Uberrides_WT.png",
		 "Zookeeper":"zookeeper_WT.png"
	}
};

module.exports = database;

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
									maxlength="600" 
									rows="6"></textarea>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Approach:</p>
								<textarea 
									class="form-control" 
									type="text" 
									name="projects[][approach]" 
									maxlength="500" 
									rows="5"></textarea>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Contribution:</p>
								<textarea 
									class="form-control" 
									type="text" 
									name="projects[][contribution]" 
									maxlength="300" 
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
	selectelem.setAttribute("name","projects[[]][technologies]");
	
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
									maxlength="600" 
									rows="6"></textarea>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Approach:</p>
								<textarea 
									class="form-control" 
									type="text" 
									name="prior_projects[][approach]" 
									maxlength="500" 
									rows="5"></textarea>
							</div>
							<div class="input-group project-group">
								<p class="side-heading">Contribution:</p>
								<textarea 
									class="form-control" 
									type="text" 
									name="prior_projects[][contribution]" 
									maxlength="300" 
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
	selectelem.setAttribute("name","prior_projects[[]][technologies]");
	
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
}
