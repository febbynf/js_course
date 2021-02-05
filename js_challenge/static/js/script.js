// challenge 1
function ageInDays() {
    var age = prompt('What year were you born?');
    var ageInDays1 = (2021 - age) * 365;
    var h1 = document.createElement('h1');
    var answer = document.createTextNode('You are ' + ageInDays1 + ' days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(answer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageInDays1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//challenge 2
function generateCat() {
    var img = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    img.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(img);
}