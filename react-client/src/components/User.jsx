import React from 'react';

const User = (props) => (
  <div>
    {props.userName === null ? 
    <input name="user-name" className="form-control" type="text"/>
    : 
    <h2>Welcome!</h2>}
    {props.userName === null ? 
      <button onClick={props.onClick}>Enter User</button> 
    : 
    <div>
    <h3>User: {props.userName}</h3>
    <h3>HighScore: {props.highScore}</h3>
    </div>}
  </div>
)

export default User;