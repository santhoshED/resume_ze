'use strict';
function handlePrint() {
	sweetAlert({
	  title: "Your file has been saved",
	  text: "Proceed to print!",
	  type: "success",
	  showCancelButton: false,
	  confirmButtonText: "OK! print",
	  closeOnConfirm: true
	},
	function(){
		setTimeout(function(){ window.print(); }, 1000);
	});
}

function adjustSkills(maxid){
	var height = document.getElementById('skills').offsetHeight;
	var max = maxid;
	while(height > 400){
		var id = max+"im";
		var elements = document.getElementsByClassName(id);
		 while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
		max--;
		height = document.getElementById('skills').offsetHeight;
	}
}