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
        function() {
            setTimeout(function() { window.print(); }, 1000);
        });
}

function adjustSkills(maxid) {
    var height = $('#skills').height();
    var max = maxid - 1;
    console.log(height);
    while (height > 400) {
        console.log(height);
        var id = max + "im";
        var elements = document.getElementsByClassName(id);
        while (elements.length > 0 && height > 400) {
            console.log(height);
            elements[0].parentNode.removeChild(elements[0]);
            height = $('#skills').height();
        }
        max--;
        height = $('#skills').height();
    }
}