const wordsUtil = require('../utils/words');
const arraysUtil = require('../utils/arrays');


const getUpdatedStemmedWord = (dictionaryValue, word, sentenceIndex) => {

	if (!dictionaryValue) {
		return { 'sentence-indexes': [sentenceIndex], count: 1, word: word }
	}
	
	let newDictionaryValue = Object.assign({}, dictionaryValue)
	newDictionaryValue.count += 1;
	arraysUtil.pushIfNotExist(newDictionaryValue['sentence-indexes'], sentenceIndex)
	newDictionaryValue.word = wordsUtil.getShortestWord([dictionaryValue.word], word)

	return newDictionaryValue;
}


exports.aggregateWords = (string, stopWords) => {

	if (typeof string !== 'string') throw new Error('Please enter a valid string');
	if (!Array.isArray(stopWords)) stopWords = [];

	const sentences = wordsUtil.getSentences(string);
	const tokenizedSentences = sentences.map((sentence) => wordsUtil.tokenizeWords(sentence));

	return tokenizedSentences.reduce((accumulator, sentence, sentenceIndex) => {
		sentence.forEach((word) => {

			const lowercaseWord = word.toLowerCase()

			if (stopWords.includes(lowercaseWord)) return accumulator;

			const stemmedWord = wordsUtil.stemWord(lowercaseWord);

			const updatedStemmedWordValue = {};
			updatedStemmedWordValue[stemmedWord] = getUpdatedStemmedWord(accumulator[stemmedWord], word, sentenceIndex);

			return Object.assign(accumulator, updatedStemmedWordValue)
		})

		return accumulator;
 	
	}, {})
}