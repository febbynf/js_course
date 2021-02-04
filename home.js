document.getElementById('text').innerHTML= 'hayyyooo';

var buah = ['pisang', 'rambutan', 'pepaya', 'mangga'];


for (let i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}

console.log(buah.join(' - '))
console.log('pop ',buah.pop(), buah) // remove last item an array
console.log('append ',buah.push('tomat'), buah)
console.log('shift ',buah.shift(), buah) // remove first item an array
console.log('unshift ', buah.unshift('kiwi'), buah) // append first item an array

let vegetables = ['bayam', 'wortel', 'kangkung']
let allGroceries = buah.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4)) //get data array
console.log(allGroceries.reverse()) // data descending

let emptyArray = new Array();

for(let num = 0; num < 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray)

let mahasiswa = {
    first_name: 'febby', 
    last_name: 'nurfitriyani',
    dataInfo: function() {
        return this.first_name + ' ' + this.last_name
    }
};

console.log(mahasiswa.dataInfo())
var age = prompt('what is your age?');
if ((age >= 18) && (age <= 35)) {
    status = 'true';
} else {
    status = 'false';
}

console.log(status)

switch (6) {
    case 0:
        text = 'weekend'
    case 5:
        text = 'weekend'
    case 6:
        text = 'weekday'
}
console.log(text)