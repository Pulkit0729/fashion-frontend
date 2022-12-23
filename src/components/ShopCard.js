import React from 'react'


function ShopCard(props) {
  return (
    <div className="col-lg-4 col-md-6 newpro" >
      <a href={`${window.location.href}/${props.id}`}>
        <div className="card">
          <img src={props.image} alt="" />
          <div className="card-body">
            <h3>{props.name}</h3>
            <p >{props.keywords}</p>
          </div>
        </div>
      </a>
    </div>

  )
}

export default ShopCard
