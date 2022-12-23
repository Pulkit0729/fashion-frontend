import React from 'react'

function AboutDisplay(props) {
    return (
        <div>
            <h2>Best Known For</h2>
            <p></p>
            <h2>Call</h2>
            <p>{props.call}</p>
            <h2>Address</h2>
            <p>{props.address}</p>
        </div>
    )
}

export default AboutDisplay
