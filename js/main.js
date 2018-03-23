var pageHeading = document.getElementsByTagName('h1')[0];
var amount = 0;

pageHeading.addEventListener('click', function () {
    var myInfo = document.createElement('p');
    myInfo.innerHTML = '<p>This is click number</p>' + ' ' + (++amount);
    document.getElementById('container').appendChild(myInfo);
});
