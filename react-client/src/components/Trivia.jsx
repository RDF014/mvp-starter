import React from 'react';
import ListItem from './ListItem.jsx';

const Trivia = (props) => (
  <div>
    <h4> Question </h4>
    There are { props.items.length } items.
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default Trivia;


