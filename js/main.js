// Form with alternate submit button
var userFirst = document.getElementById('first');
var userLast = document.getElementById('last');
var email = document.getElementById('email');
var message = document.getElementById('message');

document.addEventListener('submit', function () {
    console.log('The firstName is:' + ' ' + userFirst.value);
    console.log('The lastName is:' + ' ' + userLast.value);
    console.log('The email is:' + ' ' + email.value);
    console.log('The message is:' + ' ' + message.value);
    event.preventDefault();
});
