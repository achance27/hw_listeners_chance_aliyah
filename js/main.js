// Headline changes
var pageHeading = document.getElementsByTagName('h1')['0'];
var flo = document.getElementsByTagName('h2')['0'];
var cal = document.getElementsByTagName('h2')['1'];
var mich = document.getElementsByTagName('h2')['2'];
var wow = document.getElementsByTagName('h2')['3'];

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

wow.addEventListener('mouseover', function () {
	document.getElementsByClassName = 'disappear';
}


/*
var paragraph = document.getElementsByTagName('h1')['0'];

paragraph.addEventListener('click', function () {
    pageHeading.className = 'crazy';
});
/*
var backgroundColor = window.getElementById('container');

backgroundColor.addEventListener('resize', function () {
    backgroundColor.className = 'color';
});


//
var moreInfo = document.getElementById('yes');

moreInfo.addEventListener('dblclick', function () {
    var myLink = document.createElement('p');
    myLink.innerHTML = '<p>For more information click <a href>here</a></p>';
    document.getElementById('container').appendChild(myLink);
});
*/

// Where users click on the "Not really..." button the background changes color revealing a message
document.getElementById('no').addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
});
/*
document.getElementById('no').addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
});

/*
var disappear = document.getElementsByClassName('disappear');
var disapper. = document.getElementById('question').addEventListener('mouseover', function () {
    document.className = 'disappear';
}); */

var onScroll = document.getElementsByTagName('h2');
window.addEventListener('scroll', function () {

}
