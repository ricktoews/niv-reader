import React, { useEffect, useState } from 'react';
import Qwerty from './Qwerty';

function MemorizePopup(props) {
	const [ pressed, setPressed ] = useState([]);

	useEffect(() => {
	}, []);

	const handleLetter = letter => {
		console.log('letterHandler', letter);
		var letters = pressed.slice(0);
		letters.push(letter);
		setPressed(letters);
	}

	return (
	<div className="memorize-container">
	  <div className="memorize-popup">
	    { pressed.map((p, key) => <span style={{ padding: '5px' }}>{p}</span>) }
	    <div className="memorize-playground">
	    </div>  
	    <Qwerty letterHandler={handleLetter} />
	  </div>
	</div>
	);
}

export default MemorizePopup;
