exports.pushIfNotExist = (array, newElement) => {
	if (!array.includes(newElement)) {
		array.push(newElement);
	}
}
