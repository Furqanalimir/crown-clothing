import React from 'react';

import './collection-item.style.scss';

const CollectionItem = ({id, name, price, imageUrl}) =>(
    <div className="collection-item"> 
        <div className="image"
        style={{backgroundImage: `url(${imageUrl})`}}
        > 
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">₹{price*10}</span>
        </div>    
        </div>

    </div>
)

export default CollectionItem;