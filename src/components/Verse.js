import React, { useEffect, useState } from 'react';

function Verse(props) {

  // Clicking the verse does two things:
  // Pass the selected text to the PassageLayout component, where it gets set as a prop for the MemorizePopup component.
  // Set the MemorizePopup show flag to true.
  // Both of these functions directly set the state in the PassageLayout component.
  const handleClick = e => {
    props.setSelectedText(props.text);
    props.setShowMemPopup(true);
  };

  return <div onClick={handleClick} className="verse-wrapper">
    <div className="verse-ref">{props.verse}</div> <div className="verse-text">{props.text}</div>
  </div>;
}



export default Verse;
