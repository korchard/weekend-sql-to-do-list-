console.log('Hello!');

$(document).ready(onReady);

function onReady() {
    console.log(`It's working!`);
    $('#addButton').on('click', addTask);
    $('#viewList').on('click', '.remove', deleteTask);
    $('#viewList').on('click', '.update', changeStatus);
    displayDate();
    getList();
}

function addTask() {
    console.log('in addTask');
    let taskToSend = { task: $('#inTask').val() }

    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: taskToSend
    }).then(function(response) {
        getList(response);
        $('#inTask').val('');
    }).catch(function(error) {
        console.log('Grrrrr...', error);
        alert('No bueno! There is an ERROR!');
    })
}

function getList() {
    console.log('in getList');
    
    $.ajax({
      method: 'GET',
      url: '/tasks'
    }).then(function(response) {
        console.log(response);
        renderList(response);
    }).catch(function(error) {
        console.log('Grrrrr...', error);
        alert('No bueno! There is an ERROR!');
    })
} 

function renderList(tasks) {
    $('#viewList').empty();
    for (let item of tasks) {
        $('#viewList').append(`<tr id="row-${item.id}" data-id="${item.id}" data-status="${item.status}">
                            <td class="small"><button class="update btn btn-outline-info" id="toggle-two">&#x2713</button></td>
                            <td class="large">${item.task}</td>
                            <td class="medium">${item.time_completed}</td>
                            <td class="small"><button class="remove btn btn-outline-info">Remove</button></td>
                            </tr>`);

        if (item.status === 'Completed') {
            $(`#row-${item.id}`).addClass('completed', 'completed:td-nth-child(2)');
        } else {
            $(`#row-${item.id}`);
        }
    }
}

function displayDate() {
    let d = new Date();
    let DD = d.getDate();
    let MM = d.getMonth();
    let YYYY = d.getFullYear();
    let todayDate = `${MM + 1}/${DD}/${YYYY}`
   
    console.log(todayDate);
    $('#date').append(todayDate);
}

function deleteTask() {
    console.log('Deleting task...');
    let taskId = $(this).closest('tr').data('id');

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will have to re-add it...",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! YOU GOT IT DONE!");
        
        $.ajax({
            method: 'DELETE',
            url: `/tasks/${taskId}` 
        }).then( function(response) {
            getList(response);
        }).catch(function(error) {
            console.log('Grrrrr...', error);
            alert('No bueno! There is an ERROR!');
        })
    } else {
        swal("You can do it! STAY MOTIVATED!");
    }
});
}


function changeStatus() {
    let taskId = $(this).closest('tr').data('id');
    let taskStatus = $(this).closest('tr').data('status');

    console.log('this is taskstatus', taskStatus);
    console.log(`Changing status to complete for ${taskId}...`);
    
    $.ajax({
        method: 'PUT',
        url: `/tasks/${taskId}`,
        data: {taskStatus: taskStatus}
    }).then(function(response) {
        getList();
    }).catch(function(error) {
        console.log('Grrrrr...', error);
        alert('No bueno! There is an ERROR!');
    })
}

