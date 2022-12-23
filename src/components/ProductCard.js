import React from 'react'

function ProductCard(props) {
    return (
        <div className="col-lg-3 col-md-6 newpro" >
          <a href="./1/2/product"> 
        <div className="card">
        <img  src={props.image} alt="" />
          <div className="card-body">
          <h3>{props.name}</h3>
            <p >{props.keywords}</p>     
          </div>
        </div>
        </a>
      </div>
    )
}

export default ProductCard
