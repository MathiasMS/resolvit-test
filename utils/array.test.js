const arrayUtils = require('./arrays');

test('should push to array', () => {
	const originalArray = [1, 2, 3];
	arrayUtils.pushIfNotExist(originalArray, 1);
  	expect(originalArray).toEqual([1, 2, 3]);
});