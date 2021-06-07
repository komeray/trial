var getUserName = prompt("hello! who are you")

console.log(getUserName);

document.getElementById("un").innerText = getUserName

//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })