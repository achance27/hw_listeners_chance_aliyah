var userFirst = document.getElementById('first');
var userLast = document.getElementById('last');
var contactInfo = document.getElementById('email');
var message = document.getElementById('message');

document.addEventListener('sumbit', function () {
    console.log('The firstName is:' + '' + userFirst.value);
    console.log('The lastName is:' + '' + userLast.value);
    console.log('The email is:' + '' + contactInfo.value);
    console.log('The message is:' + '' + message.value);
    event.preventDefault();
});
