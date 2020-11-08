import React, { useEffect, useState } from 'react';

const qwertyLetters = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

function Qwerty(props) {
	useEffect(() => {
	}, []);

	const handleClick = e => {
		e.preventDefault();
		var el = e.currentTarget;
		console.log('key clicked', el.dataset.letter);
		props.letterHandler(el.dataset.letter);
	};

	return (
	<div className="qwerty-container">
	  {qwertyLetters.map((row, rowKey) => {
	    let letters = row.split('');
	    return <div class={'qwerty-row-' + rowKey}>
	      {letters.map((letter, letterKey) => <span onClick={handleClick} className="qwerty-letter" data-letter={letter}>{letter}</span>)}
	    </div>;
	  })}
	</div>
	);
}

export default Qwerty;
