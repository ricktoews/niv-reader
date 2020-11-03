import React from 'react';

const chevronStyle = {
  width: '20px',
  height: '20px',
  margin: '4px',
  borderRadius: '50%',
  backgroundColor: 'purple',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

};
function ChevronIcon(props) {
  const { direction } = props;

  const handleClick = e => {
    props.handleClick();
  };

  const chevronImg = direction === 'left' ? '<' : '>';
  return (
    <div onClick={handleClick} style={chevronStyle}>
      {chevronImg}
    </div>
  );
}

export default ChevronIcon;
