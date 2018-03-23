// Headline crazy changes
var pageHeading = document.getElementsByTagName('h1')['0'];
var flo = document.getElementsByTagName('h2')['0'];
var cal = document.getElementsByTagName('h2')['1'];
var mich = document.getElementsByTagName('h2')['2'];

// When users mouseover the headline it changes to a crazy font
pageHeading.addEventListener('mouseover', function () {
    pageHeading.className = 'crazy';
});

// When users mouseover the headline it changes to a original font but color
flo.addEventListener('mouseover', function () {
    pageHeading.className = 'color';
});

// When users mouseover the "California" it changes to a crazy font and teal
cal.addEventListener('mouseover', function () {
    pageHeading.className = 'switch';
});

// When users mouseover "Michigan" the headline turns black
mich.addEventListener('mouseover', function () {
    pageHeading.className = 'color2';
});

// Where users double click on the "Not really..." button the background changes color revealing a message and a baby meme
document.getElementById('no').addEventListener('dblclick', function () {
    document.body.style.backgroundColor = 'black';
});
document.getElementById('no').addEventListener('dblclick', function () {
    var ohReally = document.createElement('p');
    ohReally.innerHTML = '<img src="./img/ohreally.jpg" alt="Oh Really Meme" id="really">';
    document.getElementsByTagName('p')[1].appendChild(ohReally);
});

// Users that click on the "Yes, definitely!" button are given a link for more weird laws and a meme
document.getElementById('yes').addEventListener('click', function () {
    var learn = document.createElement('article');
    learn.innerHTML = '<p>click <a href="http://www.dumblaws.com/"> here<a> for more laws!</p><img src="./img/nologic.jpg" alt="no logic meme" id="logic">';
    document.getElementsByTagName('h2')[3].appendChild(learn);
});
