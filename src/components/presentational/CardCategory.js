import React from 'react';

const CardCategory = ({ categoryTitle, categoryLabel, color }) => (
  <div className="event-card-section category">
    <h4>{categoryTitle}</h4>
    <p>
      <span className='color-category' style={{ background: color }}/>
      {categoryLabel}
    </p>
  </div>
);

export default CardCategory;