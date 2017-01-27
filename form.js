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
		"Indian School of Mines Dhanbad":"ISMDhanbadLogo.png",
		"Jawaharlal Nehru Technological University Hyderabad":"JNTU_Logo.jpg",
		"International Institute of Information Technology Hyderabad":"Logo_IIIT_Hyd.jpg",
		"Mahatma Gandhi University":"Mahatma_Gandhi_University_logo.GIF",
		"University of Sydney":"Univ_of_Sydney_logo.png",
		"Koneru Lakshmaiah University":"logo_K_L_Univ.png"
	}, 
	"TECHNOLOGIES":{
		"Active Admin":"active-admin-w-t@3x.png",
		"Adhearsion":"adhearsion@3x.png",
		"Air Flow":"airflow-w-t@3x.png",
		"Android":"android-w-t@3x.png",
		"Angular 2":"angular-2-w-t@3x.png",
		"Angular js":"angular-j-s-w-t@3x.png",
		"Ansible":"anisble-w-t@3x.png",
		"ANTLR":"a-n-t-l-r-w-t@3x.png",
		"Apache spark":"apache-spark-w-t@3x.png",
		"Apache Storm":"apache-storm-w-t@3x.png",
		"Apiary Blueprints":"apiary-blueprints-w-t@3x.png",
		"Argo":"argo-w-t@3x.png",
		"ASPNET":"a-s-p-n-e-t-w-t@3x.png",
		"Asterisk":"asterisk-w-t@3x.png",
		"AWS Dynamo":"a-w-s-dynamo-d-b-w-t@3x.png",
		"AWS Lambda":"a-w-s-lambda-w-t@3x.png",
		"AWS RDS":"a-w-s-r-d-s-w-t@3x.png",
		"AWS SES":"a-w-s-s-e-s-w-t@3x.png",
		"AWS":"a-w-s-w-t@3x.png",
		"Azure":"a-z-u-r-e-w-t@3x.png",
		"Backbone js":"backbonejs@3x.png",
		"Bootstrap":"bootstrap-w-t@3x.png",
		"Brunch":"brunch@3x.png",
		"C#":"c@3x.png",
		"Cassandra":"cassandra-w-t@3x.png",
		"Celery":"celery-w-t@3x.png",
		"CHEF":"c-h-e-f-w-t@3x.png",
		"Chrome API":"chrome-a-p-i-w-t@3x.png",
		"Cocoa Touch":"cocoa-touch-w-t@3x.png",
		"C++":"cplus-w-t@3x.png",
		"Crashlytics":"crashlytics-w-t@3x.png",
		"Cron Jobs":"c-r-o-n-jobs-w-t@3x.png",
		"C":"c-w-t@3x.png",
		"D3 js":"d-3-js-w-t@3x.png",
		"devops":"devops-w-t@3x.png",
		"django":"django-w-t@3x.png",
		"Docker":"docker-w-t@3x.png",
		"Druid":"druid-w-t@3x.png",
		"Duke":"duke-w-t@3x.png",
		"Elastic Search":"elasticsearch-w-t@3x.png",
		"Ember js":"ember-j-s-w-t@3x.png",
		"Engine Yard Deployments":"engine-yard-deployments-w-t@3x.png",
		"Engine Yard":"engine-yard-w-t@3x.png",
		"ES 6":"e-s-6@3x.png",
		"Express":"express-w-t@3x.png",
		"extjs":"extjs-w-t@3x.png",
		"FICO":"f-i-c-o-business-rules-management-system-w-t@3x.png",
		"Flask Framework":"flask-framework-w-t@3x.png",
		"Foundation":"foundation-w-t@3x.png",
		"Google Cloud":"google-cloud-w-t@3x.png",
		"Hadoop":"hadoop-w-t@3x.png",
		"HBase":"h-b-a-s-e-w-t@3x.png",
		"HDFS":"h-d-f-s-w-t@3x.png",
		"Hibernate":"hibernate-w-t@3x.png",
		"HighCharts":"highcharts-w-t@3x.png",
		"HTML CSS":"h-t-m-l-c-s-s@3x.png",
		"iOS Framework":"i-o-s-framework-w-t@3x.png",
		"iOS Swift":"i-o-s-swift-w-t@3x.png",
		"iOS":"i-o-s-w-t@3x.png",
		"J2EE":"j-2-e-e-w-t@3x.png",
		"Jasper Reports":"jasper-reports-w-t@3x.png",
		"Javascript":"javascript-w-t@3x.png",
		"Java":"java-w-t@3x.png",
		"JBoss":"j-b-o-s-s-w-t@3x.png",
		"jBPM":"j-b-p-m-w-t@3x.png",
		"Jenkins":"jenkins-w-t@3x.png",
		"jQuery":"j-query-w-t@3x.png",
		"JSP":"jsp-w-t@3x.png",
		"JUnit":"j-unit-w-t@3x.png",
		"JWT":"j-w-t-w-t@3x.png",
		"Kafka":"kafka-w-t@3x.png",
		"Kendo":"kendo-w-t@3x.png",
		"Kibana":"kibana-w-t@3x.png",
		"Laravel":"laravel-w-t@3x.png",
		"LDAP":"l-d-a-p-w-t@3x.png",
		"Leaflet":"leaflet-w-t@3x.png",
		"LoadBalancers":"load-balancers-w-t@3x.png",
		"LoopBack":"loop-back-w-t@3x.png",
		"Magneto":"magento-w-t@3x.png",
		"Maven":"maven-w-t@3x.png",
		"MongoDB":"mongo-d-b-w-t@3x.png",
		"MS Excel":"m-s-excel-w-t@3x.png",
		"mySQL":"my-s-q-l-w-t-copy-3@3x.png",
		"Netty":"netty-w-t@3x.png",
		"Node js Ex":"nodejs-e-x-w-t@3x.png",
		"Node js":"nodejs-w-t@3x.png",
		"Objective C":"objective-c-w-t@3x.png",
		"Oracle DB":"oracle-d-b-w-t@3x.png",
		"Oracle":"oracle-w-t@3x.png",
		"OSGI Framework":"osgi-framework-w-t@3x.png",
		"Perl":"perl-w-t@3x.png",
		"PHP Unit":"p-h-p-unit-w-t@3x.png",
		"PHP":"p-h-p-w-t@3x.png",
		"Play Framework":"play-framework-w-t@3x.png",
		"Polymer js":"polymer-j-s-w-t@3x.png",
		"PostgreSQL":"postgre-s-q-l-w-t@3x.png",
		"Python Pandas":"python-pandas-w-t@3x.png",
		"Python":"python-w-t@3x.png",
		"Quick Rules":"quick-rules-n-e-t-w-t@3x.png",
		"R":"r@3x.png",
		"React js":"react-j-s-w-t@3x.png",
		"Realm Swift":"realm-swift-w-t@3x.png",
		"Restify":"restify-w-t@3x.png",
		"Rest Services":"rest-services-w-t@3x.png",
		"Ruby On Rails":"ruby-on-rails-w-t@3x.png",
		"Ruby":"ruby-w-t@3x.png",
		"S3":"s-3-w-t@3x.png",
		"SAML":"s-a-m-l-w-t@3x.png",
		"Scala":"scala-w-t@3x.png",
		"Scikit Learn":"scikit-learn-w-t@3x.png",
		"Script":"script-w-t@3x.png",
		"Selenium":"selenium-w-t@3x.png",
		"Seo":"s-e-o-w-t@3x.png",
		"servelts":"servelts@3x.png",
		"Shinobi Controls":"shinobi-controls-w-t@3x.png",
		"SLR":"s-l-r-w-t@3x.png",
		"Socket io":"socket-i-o-w-t@3x.png",
		"Sparkml":"sparkml-w-t@3x.png",
		"Spring MVC":"spring-m-v-c-w-t@3x.png",
		"Spring Security":"spring-security-w-t@3x.png",
		"Spring":"spring-w-t@3x.png",
		"SQL Alchemy":"sql-alchemy-w-t@3x.png",
		"SQL":"s-q-l-w-t@3x.png",
		"SSO-CAS":"s-s-o-c-a-s-w-t@3x.png",
		"Swig":"swig-w-t@3x.png",
		"Tensorflow":"tensorflow-w-t@3x.png",
		"Teradata":"t-e-r-a-d-a-t-a-w-t@3x.png",
		"Tesseract":"tesseract-w-t@3x.png",
		"Titan DB":"t-i-t-a-n-d-b-w-t@3x.png",
		"Tools for creating PDF":"tools-for-creating-pdf-w-t@3x.png",
		"Twilio":"twilio-w-t@3x.png",
		"Uberrides":"uberrides-w-t@3x.png",
		"Visual Basics":"v-b-a-w-t@3x.png",
		"WCF":"w-c-f-w-t@3x.png",
		"Weblogic":"weblogic-w-t@3x.png",
		"WebRTC":"web-r-t-c-w-t@3x.png",
		"Web Services":"web-services-w-t@3x.png",
		"Web Sphere":"web-sphere-w-t@3x.png",
		"WPF":"w-p-f-w-t@3x.png",
		"xcode":"xcode-w-t@3x.png",
		"XML":"x-m-l-w-t@3x.png",
		"yarn":"yarn-w-t@3x.png",
		"zookeeper":"zookeeper-w-t@3x.png"	
	}
};

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
