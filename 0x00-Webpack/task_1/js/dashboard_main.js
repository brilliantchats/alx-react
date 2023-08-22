import $ from "jquery";
const _ = require('lodash');

$(() => {
    $("body").append("<p>Holberton Dashboard</p>");
    $("body").append("<p>Dashboard data for the students</p>");
    $("body").append("<button>Click here to get started</button>");
    $("body").append("<p id='count'></p>");
    $("body").append("<p>Copyright - Holberton School</p>");

    let count = 0;
    function updateCounter() {
        count = count + 1;
        const para = document.getElementById('count');
        para.innerHTML = `${count} clicks on the button`;
    }

    $("button").on("click", _.debounce(updateCounter, 300));
});