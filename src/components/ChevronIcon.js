import React from 'react';

function ChevronIcon(props) {
  const { direction } = props;

  const handleClick = e => {
    props.handleClick();
  };

  const chevronImg = <img srcset="./chevron-right.svg 4x" style={{}} width="30" height="30" />;

  return (
    <div onClick={handleClick} className={`chevron chevron-${direction}`}>
      {chevronImg}
    </div>
  );
}

export default ChevronIcon;
