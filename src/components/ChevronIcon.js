import React from 'react';

function ChevronIcon(props) {
  const { direction } = props;

  const handleClick = e => {
    props.handleClick();
  };

  const chevronImg = direction === 'left' ? '<' : '>';
  return (
    <div onClick={handleClick} className="chevron">
      {chevronImg}
    </div>
  );
}

export default ChevronIcon;
