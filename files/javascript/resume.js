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
    var height = $(`#skills`).height();
    var max = maxid - 1;
    while (height > 400) {
        var id = max + "im";
        var elements = document.getElementsByClassName(id);
        while (elements.length > 0 && height > 400) {
            elements[0].parentNode.removeChild(elements[0]);
            height = $('#skills').height();
        }
        max--;
        height = $('#skills').height();
    }
}

function adjustProjects(pageId){
    var height = $("#"+pageId).height()+20;
    if(height>1136){
        var bottom = document.getElementById(`project_block_bottom_${pageId.split('_').pop()}`).innerHTML;
        $("#project_block_bottom_"+pageId.split('_').pop()).remove();
        var node = `<div class="page">
                        <div class="header">
                            <img class="logo" src="./images/logo.png"/>
                            <a class="url">www.zemosolabs.com</a>
                        </div>
                        <div class="body">
                            <div id="project" class="project">
                                <div class="project_block">
                                    <div id=long_proj_${pageId} class="project_content">
                                    </div>
                                    ${bottom}
                                </div>
                            </div>
                        </div>
                    </div>`

        $("#"+pageId).after(node);
    }
    height = $("#"+pageId).height()+20;
    while(height>1136){
        $('#long_proj_'+pageId).prepend($('#'+pageId+' .project_content p').last())
        height = $("#"+pageId).height()+20;
    }
}