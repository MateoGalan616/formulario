const colors = {
    yellow: '#FFD700',
    blue: '#0000FF',
    red: '#FF0000'
  };
  
  import React from 'react';

const Stripe = ({ color }) => {
  const handleClick = () => {
    alert(`${color} Ecuador`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: colors[color],
        height: '33.33%',
        width: '100%'
      }}
    />
  );
};

const EcuadorFlag = () => (
  <div style={{ height: '150px', width: '300px' }}>
    <Stripe color='yellow' />
    <Stripe color='blue' />
    <Stripe color='red' />
  </div>
);

export default EcuadorFlag;
