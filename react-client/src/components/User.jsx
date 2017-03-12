import React from 'react';

const User = (props) => (
  <div>
    {props.userName === null ? <input name="user-name" className="form-control" type="text"/>
    : <h2>Welcome!</h2>}
    {props.userName === null ? <button onClick={props.onClick}>Enter User</button> 
    : <h3>User:{props.userName}, HighScore:{props.highScore}</h3>}
  </div>
)

export default User;
  