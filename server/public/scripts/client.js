console.log('Hello!');

$(document).ready(onReady);

function onReady() {
    console.log(`It's working!`);
    $('#addButton').on('click', addTask);
    $('#viewList').on('click', '.remove', deleteTask);
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
      $('#viewList').append(`<tr data-id="${item.id}">
                              <td>${item.task}</td>
                              <td>${item.status}</td>
                              <td><button class="remove">Remove</button></td>
                              </tr>`);
    }
}

function deleteTask() {
    console.log('Deleting task...');
    let taskId = $(this).closest('tr').data('id');

    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}` 
    }).then( function(response) {
        getList();
    }).catch(function(error) {
        console.log('Grrrrr...', error);
        alert('No bueno! There is an ERROR!');
    })
}
