/// When users mouseover the headline it changes to a crazy font and color
var pageHeading = document.getElementsByTagName('h1')['0'];

pageHeading.addEventListener('mouseover', function () {
    pageHeading.className = 'crazy';
});
