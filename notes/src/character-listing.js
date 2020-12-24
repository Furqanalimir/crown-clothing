import React from 'react';
import Card from './characters';

import "./character-listing.css";


const CharacterListing =  (data) =>(
    
    <div className="character-listing">
    
        {
            data.information.map(value =>(<Card key={value.char_id} {...value}></Card>))
        }     
    </div>
)

export default CharacterListing;