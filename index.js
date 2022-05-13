// Create an array with n values
const A = [-3, -8, 0, 1, 19, 999999];

console.log(solution(A));

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

	let duplicates = removeDuplicates(A);

	let array = duplicates.sort();

	if(checkMaxValueEqualOrLessThanZero(array)){
		return 1
	}

	let res = 1

    array.map( e => { 
		if(!array.includes(e-1) && e-1 > 0 && e-1 > res){
			res = e-1;
		}
	} );

	return res;
}

function removeDuplicates (array){

	return array.filter( (e,k) => array.indexOf(e) === k );

}

function checkMaxValueEqualOrLessThanZero(array){
	let reversedArray = array.reverse();

	if(reversedArray[0] <= 0){
		return true;
	}
}