import React, { useEffect } from 'react'
import ShopCard from '../components/ShopCard.js'
import LoadingBox from '../components/LoadingBox.js'
import MessageBox from '../components/MessageBox.js'
import {useDispatch, useSelector} from 'react-redux'
import {listShops} from '../actions/shopAction.js'
import Header from '../components/Header.js'


function createCard(Products) {
    return(
    <ShopCard
    id={Products.id}
    name={Products.name}
    keywords={Products.keywords}
    image={Products.image}
      ></ShopCard>)   
 }
function Home(props) {
    const dispatch=useDispatch();
    const shopList= useSelector(state => state.shopList);
    const {loading, error, shops}=shopList;
    
    useEffect(() => {
        dispatch(listShops());
        
    },[dispatch])
    return (
        
        <div>
            <Header
            name={props.match.params.city}></Header>
        {loading? ( 
            <LoadingBox></LoadingBox>
            ) : error? (
                <MessageBox>{error}</MessageBox>
            ):
            (
                <div className="Home">
                    <div className="Home-heading">
                    <h2 className="sub-heading">Welcome to your fashion store.</h2>
                    </div>
                
                <div className="row">
                    {shops.map(createCard)}
                </div>
                    </div>
            )
    }</div>
       
    )}

export default Home
