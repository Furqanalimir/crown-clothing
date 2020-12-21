import React from 'react';
import { withRouter } from 'react-router-dom';

import '../menu-item/menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) =>(    //destructured item is passsed, history and match is builtin variable
    <div className= {`${size} menu-item`}  
    onClick={ ()=> history.push(`${match.url}${linkUrl}`)} >

        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />

        <div className="content">
            <h1 className="title"> { title.toUpperCase() } </h1>   {/*this is same as props.title if props was passed in MenuItem  */}
            <span className="subtitle"> SHOP NOW</span>
        </div>
    </div>

)

export default withRouter(MenuItem);
