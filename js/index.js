function addTodoItem() {
  var todoItem = $("#new-todo-item").val();
  $("#todo-list").append(
    "<li><input type='checkbox'" +
      " name='todo-item-done'" +
      " class='todo-item-done check' /> " +
      "<label for='todo-item-done'> " +
      todoItem +
      "</label>" +
      " <i class='todo-item-delete material-icons'>" +
      "delete</i></li>"
  );

  $("#new-todo-item").val("");
}

function deleteTodoItem(e, item) {
  e.preventDefault();
  $(item)
    .parent()
    .fadeOut("slow", function () {
      $(item).parent().remove();
    });
}

function completeTodoItem() {
    $(this).parent().toggleClass("strike");
}

$(function () {
    $("#add-todo-item").on("click", function (e) {
    e.preventDefault();
    addTodoItem();
    });

    $("#todo-list").on("click", ".todo-item-delete", function (e) {
    var item = this;
    deleteTodoItem(e, item);
    });

    $(document).on("click", ".todo-item-done", completeTodoItem);
});

$("#add-todo-item").click(function () {
    if ($("#new-todo-item").val() == "") {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please write a task first!",
    });
    e.preventDefault();
    return false;
}
});

$(document).ready(function () {
$("#filter-input").hide()
})

$(document).ready(function(){
    $('#filter').click(function(){
        $('#filter-input').toggle(400);
    });
});
$("#filter-input").on("keyup", function() {
    var value = this.value.toLowerCase().trim();
    $("#todo-list li").show().filter(function() {
    return $(this).text().toLowerCase().trim().indexOf(value) == -1;
    }).hide();
});
