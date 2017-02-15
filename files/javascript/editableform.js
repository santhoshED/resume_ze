function handleDelete(id) {

    sweetAlert({
            title: "Are you sure?",
            text: "You will not be able to recover this Resume",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel please!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm) {
            if (isConfirm) {
                var form = document.createElement("form");
                form.setAttribute("method", "POST");
                form.setAttribute("action", "/delete");
                form.innerHTML += `<input  
					type="hidden" 
					name="employee_id"
					value=${id}>`;
                document.body.appendChild(form);
                form.submit();
                sweetAlert("Deleted!", "Your file has been deleted.", "success");
            } else {
                sweetAlert("Cancelled", "Your file is safe :)", "error");
            }
        });

}

function renderUniversitiesEdit(name, index) {
    const universities = Object.keys(database.UNIVERSITIES);
    for (var i = 0; i < universities.length; i++) {
        if (universities[i] === name) {
            $(`#CollegeSelect_${index}`).append(`<option selected>${universities[i]}</option>`);
        } else {
            $(`#CollegeSelect_${index}`).append(`<option>${universities[i]}</option>`);
        }

    }
}

function renderTechnologiesEdit(names, index) {

    const array_names = names.split(',');

    const technologies = Object.keys(database.TECHNOLOGIES).sort();
    for (var i = 0; i < technologies.length; i++) {
        if (array_names.indexOf(technologies[i]) >= 0) {
            $(`#${index}`).append(`<option selected="selected" value="${technologies[i]}">${technologies[i]}</option>`);
        } else {
            $(`#${index}`).append(`<option value="${technologies[i]}">${technologies[i]}</option>`);
        }

    }
}

function renderskillsEdit(names, index) {
    names = names.split(',');
    var node = $(`#${index}`);
    ChosenOrder.setSelectionOrder(node, names, true);
}