import React from 'react';

const User = props => {
  return (
    <div className="User">
      <h3>{props.name}</h3>
      <p>{props.id}</p>
    </div>
  );
};

export default User;