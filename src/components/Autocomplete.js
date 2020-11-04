import React, { useState, useEffect } from 'react';
//import './Autocomplete.scss';

function Autocomplete(props) {
	const [matches, setMatches] = useState([]);
	const [showMatches, setShowMatches] = useState(false);
	const [matchTop, setMatchTop] = useState(0);
	const [matchLeft, setMatchLeft] = useState(0);
	const items = props.data;

	useEffect(() => {
		var field = document.querySelector('.autocomplete-input');

		setMatchTop(field.offsetTop + field.offsetHeight + 3);
		setMatchLeft(field.offsetLeft);
	}, []);

	// Handle click on match items; set selection in parent component.
	const handleItemClick = e => {
		var el = e.currentTarget;
		var itemName = el.dataset.item;
		props.setSelection(itemName);
		setShowMatches(false);
	}

	// Handle input field, get matches.
	const handleItemInput = e => {
		var el = e.currentTarget;
		var val = el.value;
		var current_matches = items.filter(b => b.substr(0, val.length).toLowerCase() === val.toLowerCase());
		setMatches(current_matches);
		setShowMatches(current_matches.length <= 7);
	};

	const { style } = props;

	return (
	  <div style={style}>
	    <input type="text" placeholder={props.prompt} className="autocomplete-input" onChange={handleItemInput} />
	    <ul style={{ display: showMatches ? 'block' : 'none', top: matchTop, left: matchLeft }} className="autocomplete-matches">
	      {matches.map((m, key) => {
	        return <li key={key} onClick={handleItemClick} data-item={m}>{m}</li>;
	      })}
	    </ul>
	  </div>
	);
}

export default Autocomplete;
