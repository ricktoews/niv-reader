import React, { useEffect, useState } from 'react';
import Qwerty from './Qwerty';

function stripPunctuation(str) {
	var stripped = str.replace(/(\d),(\d)/g, '$1QQ$2');
	stripped = stripped.replace(/(\w)'(\w)/g, '$1XX$2');
	stripped = stripped.replace(/\W/g, '*');
	stripped = stripped.replace(/\*+/g, ' ');
	stripped = stripped.replace(/QQ/g, ',');
	stripped = stripped.replace(/XX/g, "'");
	return stripped;
}

function compileWordList(text) {
	text = text.replace('--', ' ');
	var stripped = stripPunctuation(text);
	var words = stripped.trim().split(' ');

	return words;
}


function MemorizePopup(props) {
	const [ firstLetter, setFirstLetter ] = useState([]);
	const [ showPopup, setShowPopup ] = useState(props.show);
	const [ wordList, setWordList ] = useState([]);
	const [ currentWords, setCurrentWords ] = useState([]);

	useEffect(() => {
		setWordList(compileWordList(props.selectedText));
	}, [props.selectedText]);

	useEffect(() => {
		setShowPopup(props.show);
	}, [props.show]);


	const handleClick = e => {
		var el = e.target;
		if (el.className === 'memorize-container') {
			setCurrentWords([]);
			setWordList([]);
			setFirstLetter([]);
			props.setShowMemPopup(false);
		}
	}


	const handleLetter = letter => {
		var letters = firstLetter.slice(0);

		var currentLetterNdx = letters.length;
console.log('checking letter', wordList, wordList[currentLetterNdx]);
		var textWordFirstLetter = wordList[currentLetterNdx] && wordList[currentLetterNdx][0];

		if (textWordFirstLetter && letter.toLowerCase() === textWordFirstLetter.toLowerCase()) {
			letters.push(letter);
			setFirstLetter(letters);
			setCurrentWords(wordList.slice(0, currentLetterNdx + 1));
		} else {
			console.log('Clicked letter does not match', textWordFirstLetter, letter);
		}
	}

	return (
	<div style={{display: showPopup ? 'flex' : 'none' }} onClick={handleClick} className="memorize-container">
	  <div className="memorize-popup">
	    <div className="memorize-playground">
	      { currentWords.map((word, key) => <span style={{ padding: '5px' }}>{word}</span>) }
	    </div>  
	    <Qwerty letterHandler={handleLetter} />
	  </div>
	</div>
	);
}

export default MemorizePopup;
