import React from 'react';
import './Popup.scss';

function Popup(props) {
	const popupStyle = {
		width: props.width + 'px',
		height: props.height + 'px'
	};

	return (
	  <div className="popup-container">
	    <div style={popupStyle} className="popup">
              {props.children}
	    </div>
	  </div>
	);
}

export default Popup;
