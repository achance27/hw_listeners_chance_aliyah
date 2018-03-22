/*var userFirstName = document.getElementById('first');
input.addEventListener('sumbit', function () {
	event.preventDefault();
	console.log(userFirstName.innerText)
}
*/
//39:00
/*
document.querySelector('#first').addEventListener('submit', function (event) {
	document.getElementsbyTagName('form')[0].innerText;
	event.preventDefault();
	console.log(event);
});

var submitButton = document.getElementsByTagName('input');

submitButton.addEventListener('submit', function (eventInfo) {
    eventInfo.preventDefault();
    console.log(eventInfo);
}); */

document.getElementById('first').addEventListener('submit', function (event) {
    event.preventDefault();
});
