import React, { useEffect, useState } from 'react';

function LargeLetter(props) {
	const classes = ['letter-container'];

	if (props.letter && props.correct) {
		classes.push('correct');
	}

//	console.log('LargeLatter', props, classes);

	return (
	<div style={{ display: props.letter ? 'flex' : 'none' }} className="large-letter">
		<div className={classes.join(' ')}>
		{props.letter}
		</div>
	</div>
	);
}

export default LargeLetter;
