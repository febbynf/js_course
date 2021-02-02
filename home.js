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