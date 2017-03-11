import React from 'react';

const User = (props) => (
  <div>
    <input 
      className="form-control" 
      type="text"
      // onChange={(e) => props.videoSearch(e.target.value)} 
    />
    <button className="btn hidden-sm-down">
      Enter User
    </button>
  </div>
)

export default User;
  