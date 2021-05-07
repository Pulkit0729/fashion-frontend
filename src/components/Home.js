import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import LoadingBox from './LoadingBox.js'
import MessageBox from './MessageBox.js'

function createCard(Products) {
    return(
    <Card
    name={Products.name}
    price={Products.price}
    image={Products.image}></Card>)   
 }
function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    useEffect(() => {
        const fethData =async() => {
            try {
                setLoading(true);
            const{data} =await axios.get('/api/products');
            setLoading(false);
            setProducts(data);
            }catch(err){
                setError(err.message);
                setLoading(false);
            }
            
        };
        fethData();
    },[])
    return (
        <div>
        {loading? (
            
            <LoadingBox></LoadingBox>
            ) : error? (
                <MessageBox>{error}</MessageBox>
            ):(
                <div className="Home">
                <h2 className="sub-heading">Plant and pots suitable for all ocasions.</h2>
                <p>Simple and affordable price for you.</p>
                <div className="row">
                    {products.map(createCard)}
                </div>
                    </div>
            )
    }</div>
       
    )}

export default Home
