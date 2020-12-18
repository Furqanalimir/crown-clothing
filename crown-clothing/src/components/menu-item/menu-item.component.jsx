import React from 'react';

import '../menu-item/menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size }) =>(    //destructured item is passsed
    <div className= {`${size} menu-item`} >

        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} >

        <div className="content">
            <h1 className="title"> { title.toUpperCase() } </h1>   {/*this is same as props.title if props was passed in MenuItem  */}
            <span className="subtitle"> SHOP NOW</span>
        </div>
        
        </div>
    </div>

)

export default MenuItem;
