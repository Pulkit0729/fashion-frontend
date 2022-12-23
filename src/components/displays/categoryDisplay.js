import React from 'react'
import {MegaMenuAccessories, MegaMenuKids, MegaMenuMen, MegaMenuWomen} from './MegaMenu'
import data from '../../data'
import ProductCard from '../ProductCard'

function createProductCard(props) {
    return(
    <ProductCard
    id={props.id}
    name={props.name}
    keywords={props.keywords}
    image={props.image}
      ></ProductCard>)   
 }

function CategoryDisplay() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light navbar-expand-lg" id="myNavbar">
                    <ul class="navbar-nav nav-fill">
                        <MegaMenuMen></MegaMenuMen>
                        <MegaMenuWomen></MegaMenuWomen>
                        <MegaMenuKids></MegaMenuKids>
                        <MegaMenuAccessories></MegaMenuAccessories>
                    </ul>
            </nav>
            <div className="row">
            {data.map(createProductCard)}
        </div>
        </div>
    )
}

export default CategoryDisplay
