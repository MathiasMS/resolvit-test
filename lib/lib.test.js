const aggregateWords = require('./lib').aggregateWords;

describe('word aggregator', () => {
	test('should not take stopwords in account', () => {
		const originalString = "a a a the the work a a the the ";
		const stopWords = ["a", "the"];
		const aggregatedWords = aggregateWords(originalString, stopWords);

	  	expect(aggregatedWords)
	  	.toEqual({
	  		work: {'sentence-indexes': [0], count: 1, word: 'work'},
	  	});
	});

	test('should split and save sentences indexes', () => {
		const originalString = "first. second";
		const stopWords = ["a", "the"];
		const aggregatedWords = aggregateWords(originalString, stopWords);

	  	expect(aggregatedWords)
	  	.toEqual({
	  		first: {'sentence-indexes': [0], count: 1, word: 'first'},
	  		second: {'sentence-indexes': [1], count: 1, word: 'second'},
	  	});
	});


	test('should throw an error when not a valid string', () => {
		const originalString = 2;
		const stopWords = ["a", "the"];

	  	expect(() => aggregateWords(originalString, stopWords))
	  	.toThrowError(Error, 'Please enter a valid string');
	});

	//TODO add more test cases
})
