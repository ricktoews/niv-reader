import React from 'react';
//import './Popup.scss';

function Popup(props) {
	const popupStyle = {
		width: props.width + 'px',
		height: props.height + 'px'
	};

	// Close Book reference prompt if click is detected outside.
	// This is a little complicated.
	// We don't want to hide the popup if the click is in the book prompt or a book name.
	// As it happens, the areas "outside" are all DIV tags, so that's what we look for.
	const handleClick = e => {
		var target = e.target;
		var clickedOutside = target.tagName.toLowerCase() === 'div';
		if (clickedOutside) {
			props.setShowPopup(false);
		}
	}

	return (
	  <div onClick={handleClick} className="popup-container">
	    <div className="popup">
              {props.children}
	    </div>
	  </div>
	);
}

export default Popup;
