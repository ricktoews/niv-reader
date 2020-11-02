import React, { useEffect, useState } from 'react';
import './SelectInteger.scss';

function IntegerElement(props) {
	const handleSelectInteger = e => {
		var el = e.currentTarget;
		var value = el.dataset.value;
		props.setInteger(value);
	}

	return (
	<div className="integer-element" onClick={handleSelectInteger} data-value={props.item}>{props.item}</div>
	)
}


function SelectInteger(props) {
	var items = Object.keys([...new Array(props.maxValue)]).map(n => 1*n + 1);
	const [integers, setIntegers] = useState(items);

	return (
	<div style={{position: 'absolute', top: '50px' }}>
	  <div style={{height: '200px', overflowY: 'scroll', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
	  {integers.map(i => <IntegerElement setInteger={props.setInteger} item={i} />)}
	  </div>
	</div>
	);
}

export default SelectInteger;