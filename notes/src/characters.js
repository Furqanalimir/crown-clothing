import React from 'react';
import './characters.css';



const Card =({char_id, name,  portrayed, status, nickname, img})=>(

    <div  className="listing">
    <div  style={ {backgroundImage: `url(${img})`} } className="backgroundImage" >
    <ol>
      <li> Name: { name }</li> 
      <li>Potrayed: { portrayed }</li>
      <li>Status: { status }</li>
      <li>Nickname: { nickname }</li>
    </ol>
    </div>
    </div>

)
export default Card;