console.log('Hello!');

$(document).ready(onReady);

function onReady() {
    console.log(`It's working!`);
    $('#addButton').on('click', addTask); // creat click handler
    $('#viewList').on('click', '.remove', deleteTask); // delete click handler
    $('#viewList').on('click', '.update', changeStatus); //update click handler
    displayDate(); // read date on DOM
    getList(); // read info on DOM
} // end onReady function

function addTask() { // sends the object of taskToSend to the server side
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
    }) // end ajax request
} // end addTask function

function getList() { // requesting database information from server side
    console.log('in getList');
    
    $.ajax({
      method: 'GET',
      url: '/tasks'
    }).then(function(response) {
        console.log(response);
        renderList(response); // appends the information to the DOM
    }).catch(function(error) {
        console.log('Grrrrr...', error);
        alert('No bueno! There is an ERROR!');
    }) // end ajax request
} // end getList function

function renderList(tasks) { // appends the information to the DOM
    $('#viewList').empty();
    for (let item of tasks) { // data-id and data-status are used to identify which information to UPDATE
        $('#viewList').append(`<tr id="row-${item.id}" data-id="${item.id}" data-status="${item.status}">
                            <td class="small"><button class="update btn btn-outline-info" id="toggle-two">&#x2713</button></td>
                            <td class="large" id="${item.task}">${item.task}</td>
                            <td class="medium">${item.time_completed}</td>
                            <td class="small"><button class="remove btn btn-outline-info">Remove</button></td>
                            </tr>`);

        if (item.status === 'Completed') { // conditional to toggle between complete and incomplete status and display the change on DOM
            $(`#row-${item.id}`).addClass('completed');
            $(`tr td:nth-child(2)`).css({'text-decoration': 'line-through'});
        } else {
            $(`#row-${item.id}`);
        } // end conditional
    } // end for loop
} // end renderList function

function displayDate() { // function to display current date in banner
    let d = new Date();
    let DD = d.getDate();
    let MM = d.getMonth();
    let YYYY = d.getFullYear();
    let todayDate = `${MM + 1}/${DD}/${YYYY}`
   
    console.log(todayDate);
    $('#date').append(todayDate);
} // end displayDate function

function deleteTask() { // uses click handler to identify which row to delete based on id
    console.log('Deleting task...');
    let taskId = $(this).closest('tr').data('id');

    swal({ // sweetalert to ensure item is meant to be deleted
        title: "Are you sure?",
        text: "Once deleted, you will have to re-add it...",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! YOU GOT IT DONE!");
        
        $.ajax({ // if meant to be deleted, DELETE request is sent to the server side
            method: 'DELETE',
            url: `/tasks/${taskId}` 
        }).then( function(response) {
            getList(response);
        }).catch(function(error) {
            console.log('Grrrrr...', error);
            alert('No bueno! There is an ERROR!');
        }) // end ajax request
    } else { // if NOT meant to DELETE the request is not sent
        swal("You can do it! STAY MOTIVATED!");
    } // end conditional
});
} // end deleteTask function 


function changeStatus() { // function to update in database whether a task is complete or incomplete
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
    }) // end ajax request
} // end changeStatus function 

