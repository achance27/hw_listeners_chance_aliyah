var pageHeading = document.getElementsByTagName('h1')[0];
var amount = 1;

pageHeading.addEventListener('click', function () {
    var myInfo = document.createElement('p');
    myInfo.innerHTML = 'This is click number' + ' ' + amount;
    amount++;
    document.getElementById('container').appendChild(myInfo);
});
