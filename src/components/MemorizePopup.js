import React, { useEffect, useState } from 'react';
import Qwerty from './Qwerty';
import Abcde from './Abcde';
import LargeLetter from './LargeLetter';
import { constructFragment, compileWordList } from '../utils/mem';

function MemorizePopup(props) {
	// wordList should persist until a new verse is selected.
	const [ wordList, setWordList ] = useState([]);

	const [ largeLetter, setLargeLetter ] = useState('');
	const [ largeLetterCorrect, setLargeLetterCorrect ] = useState(false);
	const [ firstLetter, setFirstLetter ] = useState([]);
	const [ currentWords, setCurrentWords ] = useState([]);
	const [ verseRef, setVerseRef ] = useState('');
	const [ fragment, setFragment ] = useState('');

	useEffect(() => {
		console.log('MemorizePopup, just set wordList', wordList);
	}, [wordList]);
	useEffect(() => {
		if (props.showMemPopup) {
			setFragment('');
			setCurrentWords([]);
			setFirstLetter([]);
		}
	}, [props.showMemPopup]);
 
	useEffect(() => {
		setVerseRef(`${props.book} ${props.chapter}:${props.selectedVerse}`);
		setWordList(compileWordList(props.selectedText));
	}, [props.selectedText]);

	// This keeps the memorize-playground area scrolled to the bottom, keeping up with the words entered.
	useEffect(() => {
		let el = document.querySelector('.memorize-playground');
		el.scrollTop = el.scrollHeight;
	}, [currentWords]);


	const handleClickCloseMemPopup = e => {
		var el = e.target;
		if (el.className === 'memorize-container') {
			setFragment('');
			setCurrentWords([]);
			setFirstLetter([]);
			props.setShowMemPopup(false);
		}
	}

	const handleLetter = letter => {
		var letters = firstLetter.slice(0);

		var currentLetterNdx = letters.length;
		var textWordFirstLetter = wordList[currentLetterNdx] && wordList[currentLetterNdx][0];
		setLargeLetter(letter);

			console.log('word list', wordList);
		if (textWordFirstLetter && letter.toLowerCase() === textWordFirstLetter.toLowerCase()) {
			setLargeLetterCorrect(true);
			letters.push(letter);
			setFirstLetter(letters);
			setCurrentWords(wordList.slice(0, currentLetterNdx + 1));
			setFragment(constructFragment(wordList.slice(0, currentLetterNdx + 1), props.selectedText));
		} else {
			setLargeLetterCorrect(false);
			console.log('Clicked letter does not match', textWordFirstLetter, letter);
		}
	}

	return (
	<div style={{display: props.showMemPopup ? 'flex' : 'none' }} onClick={handleClickCloseMemPopup} className="memorize-container">
	  <div className="memorize-popup">
	    <div className="memorize-playground">
          <div className="text-label">{verseRef}</div>
	      <div className="text-fragment">{ fragment }</div>
	    </div>  
	  </div>
      <LargeLetter letter={largeLetter} correct={largeLetterCorrect} />
      <Qwerty letterHandler={handleLetter} setFragment={setFragment} setCurrentWords={setCurrentWords} setWordList={setWordList} setFirstLetter={setFirstLetter} nextVerse={props.nextVerse} replayVerse={props.replayVerse} />
	</div>
	);
}

export default MemorizePopup;
