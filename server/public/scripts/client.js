console.log('Hello!');

$(document).ready(onReady);

function onReady() {
    console.log(`It's working!`);
    $('#addButton').on('click', addTask);
    $('#viewList').on('click', '.remove', deleteTask);
    $('#viewList').on('click', '.update', changeStatus);
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
                            <td><button class="update btn btn-outline-info" id="toggle-two">&#x2713</button></td>
                            <td>${item.time}</td>
                            <td>${item.task}</td>
                            <td><button class="remove btn btn-outline-info">Remove</button></td>
                            </tr>`);

        if (item.status === 'Completed') {
            $(`#row-${item.id}`).addClass('completed');
        } else {
            $(`#row-${item.id}`);
        }
    }
}

function deleteTask() {
    console.log('Deleting task...');
    let taskId = $(this).closest('tr').data('id');

    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}` 
    }).then( function(response) {
        getList(response);
    }).catch(function(error) {
        console.log('Grrrrr...', error);
        alert('No bueno! There is an ERROR!');
    })
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

