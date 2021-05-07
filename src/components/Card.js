import React from 'react'

function Card(props) {
    return (
       
        <div className="col-lg-4 col-md-6 newpro">
        <div className="card">
          <div className="card-header">
            <h3>{props.name}</h3>
          </div>
          <div className="card-body">
            <h2>{props.price}</h2>
            <img  src={props.images} alt="" />
            <button type="button" className=" btn btn-lg btn-block btn-dark">Know More</button>
          </div>
        </div>
      </div>
      
    )
}

export default Card
