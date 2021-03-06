import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items}) =>(
    <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
        { 
            items.filter((items, index) => index<4)
            .map(({id, ...OtherItemProps}) =>( 
                <CollectionItem key={id} {...OtherItemProps}/>
            ))
        }
        </div>
        
    </div>
)

export default CollectionPreview;