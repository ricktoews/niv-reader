import React, { useEffect, useState } from 'react';
import ToolButtons from './ToolButtons';

const qwertyLetters = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM', '123456789'];

function Qwerty(props) {
	useEffect(() => {
	}, []);

	const textDone = () => {
		props.setFragment('');
		props.setCurrentWords([]);
		props.setWordList([]);
		props.setFirstLetter([]);
console.log('calling nextVerse');
		props.nextVerse();
	}

	const textReplay = () => {
		props.setFragment('');
		props.setCurrentWords([]);
		props.setWordList([]);
		props.setFirstLetter([]);
		console.log('Get help here.');
		props.replayVerse();
	}


	const handleClick = e => {
		e.preventDefault();
		var el = e.currentTarget;
		props.letterHandler(el.dataset.letter);
	};

	return (
        <div className="keyboard-wrapper">
	  <ToolButtons textDone={textDone} textReplay={textReplay} include={{done: true, help: true}} />
	<div className="qwerty-container">
	  {qwertyLetters.map((row, rowKey) => {
	    let letters = row.split('');
	    return <div key={rowKey} className={'qwerty-row-' + rowKey}>
	      {letters.map((letter, letterKey) => <span key={letterKey} onClick={handleClick} className="qwerty-letter" data-letter={letter}>{letter}</span>)}
	    </div>;
	  })}
	</div>
	</div>
	);
}

export default Qwerty;
