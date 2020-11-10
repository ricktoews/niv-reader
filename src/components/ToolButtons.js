import React, { useEffect, useState } from 'react';

function ToolButtons(props) {
	useEffect(() => {
	}, []);


	const handleDone = e => {
		props.textDone();
	}

	const handleReplay = e => {
		props.textReplay();
	}

	const tools = {
		done: <div className="tool-btn done" onClick={handleDone}></div>,
		help: <div className="tool-btn help" onClick={handleReplay}></div>
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
	  <div className="tool-btn done" onClick={handleDone}>
	    <img srcSet="/check-mark.svg 4x" />
      </div>
	  <div className="tool-btn help" onClick={handleReplay}>
	    <img srcSet="/replay.svg 4x" />
      </div>
	</div>
	);
}

export default ToolButtons;
