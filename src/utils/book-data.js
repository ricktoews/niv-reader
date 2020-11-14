const bookArray = require('../data/book-array');

const bookData = {};
const books = [];
bookArray.forEach(bookObj => {
	let book = Object.keys(bookObj)[0];
	let lastChapter = Object.values(bookObj)[0];
	bookData[book] = lastChapter;
	books.push(book);
});


function getPrevChapter(reference) {
	var { book, chapter } = reference;
	if (chapter > 1) {
		chapter -= 1;
	} else {
		var ndx = books.indexOf(book);
		if (ndx > 0) {
			ndx -= 1;
		} else {
			ndx = 65;
		}
		book = books[ndx];
		chapter = bookData[book];
	}
	return { book, chapter };
}

function getNextChapter(reference) {
	var { book, chapter } = reference;
	var maxChapter = bookData[book];
	if (chapter < maxChapter) {
		chapter = 1*chapter + 1;
	} else {
		var ndx = books.indexOf(book);
		if (ndx < 65) {
			ndx += 1;
		} else {
			ndx = 0;
		}
		book = books[ndx];
		chapter = 1;
	}
	return { book, chapter };
}

export { books, bookData, getPrevChapter, getNextChapter };
