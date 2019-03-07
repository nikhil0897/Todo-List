import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

const item = ({ name, onDelete}) => {
  return (
    <div className="item-section">
      <input
        type="checkbox"
        className="item-section__check"
        onClick={console.log("Bing!!")}
      />
      <span className="item-section__content"> {name} </span>
      <i class="fas fa-trash" onClick={onDelete} style={{ position: 'absolute',color: '#a4a4a4', cursor:'pointer', paddingLeft: '20%'}} ></i>
    </div>
  );
};

item.propTypes = {
  name: PropTypes.string,
  onDelete: PropTypes.func
};

export default item;
