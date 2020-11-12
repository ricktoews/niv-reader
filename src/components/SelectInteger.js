import React, { useEffect, useState } from 'react';

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
	<div>
	  <div className="select-integer-wrapper">
 	    {integers.map((i, key) => <IntegerElement key={key} setInteger={props.setInteger} item={i} />)}
	  </div>
	</div>
	);
}

export default SelectInteger;
