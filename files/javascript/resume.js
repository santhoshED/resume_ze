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
		setTimeout(function(){ window.print(); }, 100);
	});
}