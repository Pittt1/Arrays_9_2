var womenArray = ['Agnieszka', 'Kasia', 'Eliza'];
var menArray = ['Grzegorz', 'Tadeusz', 'Franciszek'];
var bothArrays = womenArray.concat(menArray);

console.log(bothArrays);

var newWoman = 'Barrbara';

if ( bothArrays.indexOf(newWoman) === -1 ) {
	var newArray = bothArrays.push(newWoman);
};

console.log(newArray);