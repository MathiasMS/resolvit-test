const config = require('./config');
const wordsUtil = require('./utils/words');
const arraysUtil = require('./utils/arrays');
const aggregateWords = require('./lib/lib').aggregateWords;
const _ = require('lodash');

const aggregatedWords = aggregateWords(config.text, config.stopWords)

var finalstemmedWordsDictionary = Object.keys(aggregatedWords).map(stemmedWord => {
	return {
		'word': aggregatedWords[stemmedWord].word, 
		'sentence-indexes': aggregatedWords[stemmedWord]['sentence-indexes'], 
		'total-ocurrences': aggregatedWords[stemmedWord].count
	};
});

const sortedArray = _.sortBy(finalstemmedWordsDictionary, (wordData) => wordData.word.toLowerCase());

console.log(JSON.stringify(sortedArray, null, 2))

