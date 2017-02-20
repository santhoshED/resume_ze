'use strict';

function handleSave() {
    sweetAlert({
            title: "Your file has been saved",
            type: "success",
            showCancelButton: false,
            confirmButtonText: "OK! ",
            closeOnConfirm: true
        })
}

function handlePrint(){
    window.print();
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
                                    <div class="side-heading">[...Continues]</div>
                                    <div id=long_proj_${pageId}>
                                        <div class="project_content"></div>
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
        if($.trim($('#project_block_top_'+pageId.split('_').pop()).children().last().html())==''){
            $('#project_block_top_'+pageId.split('_').pop()).children().last().remove();
            $('#long_proj_'+pageId).prepend($('#project_block_top_'+pageId.split('_').pop()).children().last())
            height = $("#"+pageId).height()+20;
        }
        else{
            if($('#long_proj_'+pageId).children().first().attr('class')=="project_content"){
                $('#long_proj_'+pageId).children().first().prepend($('#'+pageId+' .project_content p').last())
            }
            else{
                $('#long_proj_'+pageId).prepend('<div class="project_content"></div>');
                 $('#long_proj_'+pageId).children().first().prepend($('#'+pageId+' .project_content p').last())
            }
            height = $("#"+pageId).height()+20; 
        }
        
    }
}