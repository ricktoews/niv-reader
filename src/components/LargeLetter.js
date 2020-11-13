import React, { useEffect, useState } from 'react';

/*
Start: display: flex; opacity: 1, transition-duration: 1s

End: display: none; opacity: 1
*/

function LargeLetter(props) {
	const classes = ['letter-container'];

	var letterEl;

	useEffect(() => {
		if (props.letter) {
			letterEl = document.querySelector('.letter-container');
			letterEl.classList.add('start-trans');
			letterEl.addEventListener('transitionend', () => {
				props.setLargeLetter('');
				letterEl.classList.remove('start-trans');
			});
		}
	}, [props.letter]);
	
	if (props.letter && props.correct) {
		classes.push('correct');
	}

	

	return (
	<div style={{ display: props.letter ? 'flex' : 'none' }} className="large-letter">
		{ !props.letter ? (<div style={{ backgroundColor: 'purple' }} className={classes.join(' ')}>
		{props.letter}
		</div>)

		: (<div className={classes.join(' ')}>
		{props.letter}
		</div>)
	        }
	</div>
	);
}

export default LargeLetter;
