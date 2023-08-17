
import React from 'react';

import menuitems from './menudata.jsx';
import "./menudata.css"


const MenuPage = () => {
  return (
    <div>
      <div className="card-group">
        {menuitems.map((menuitem) => (
          <div key={menuitem.id} className="card">
            <img
              src={menuitem.imageUrl}
              className="card-img"
              alt={menuitem.title}
            />
            <div className="card-body">
              <h3 className="card-title">{menuitem.title}</h3>
              <p className="card-text">{menuitem.variety}</p>
              <p className="card-price">{menuitem.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;