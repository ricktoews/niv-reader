import React, { useEffect, useState } from 'react';

function ToolButtons(props) {
	useEffect(() => {
	}, []);

	const handleDone = e => {
console.log('clicked Done');
		props.textDone();
	}

	const handleHelp = e => {
console.log('clicked Help');
		props.textHelp();
	}

	const tools = {
		done: <div className="tool-btn done" onClick={handleDone}></div>,
		help: <div className="tool-btn help" onClick={handleHelp}></div>
	};

	const makeButtons = (include) => {
		var btns = [];
		for (let btn in tools) {
			if (include[btn]) {
				btns.push(tools[btn]);
			}
		}
		return btns;
	};

	return (
	<div className="tool-btn-container">
	  <div className="tool-btn done" onClick={handleDone}></div>
	  <div className="tool-btn help" onClick={handleHelp}></div>
	</div>
	);
}

export default ToolButtons;
