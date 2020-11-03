import React from 'react';

function Reference(props) {
  return <div>
    <span onClick={props.popupSetReference} className="ref">{props.book} {props.chapter}</span>
  </div>;
}

export default Reference;
