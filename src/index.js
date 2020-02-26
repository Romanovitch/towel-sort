
// You should implement your task here.

module.exports = function towelSort (matrix) {
	// return matrix.flat(Infinity);
	if (!matrix) return []
	let switchReverse = false
	return matrix
		.reduce((newArr, el) => {
			el = switchReverse ? el.reverse() : el
			switchReverse = switchReverse ? false : true
			return newArr.concat(el)
		}, [])
}
