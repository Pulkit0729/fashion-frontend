import React from 'react'
import ProductCard from '../ProductCard'
import data from '../../data'

function createProductCard(props) {
    return(
    <ProductCard
    id={props.id}
    name={props.name}
    keywords={props.keywords}
    image={props.image}
      ></ProductCard>)   
 }

function TrendingDisplay() {
    
    return (
        <div className="row">
            {data.map(createProductCard)}
        </div>
    )
}

export default TrendingDisplay
