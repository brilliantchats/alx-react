import $ from "jquery";

$(() => {
    console.log('It works');
    $("p").add("<p>Holberton Dashboard</p>").appendTo(document.body);
    $("p").add("<p>Dashboard data for the students</p>").appendTo(document.body);
    $("p").add("<p>Copyright - Holberton School</p>").appendTo(document.body);
});