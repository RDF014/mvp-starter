import React from 'react';

const User = (props) => (
  <div>
    <input 
      name="user-name"
      className="form-control" 
      type="text"
      // onChange={(e) => props.videoSearch(e.target.value)} 
    />
    <button onClick={props.onClick}>
      Enter User
    </button>
  </div>
)

export default User;
  