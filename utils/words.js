const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

exports.tokenizeWords = string => tokenizer.tokenize(string);

exports.getSentences = string => string.split(".");

exports.stemWord = word => natural.PorterStemmer.stem(word);

exports.getShortestWord = words => {
	var wordSortedByLength = words.sort((a, b) => a.length - b.length);
	return wordSortedByLength[0];
}