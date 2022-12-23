import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';
import { detailsShop } from '../actions/shopAction.js';
import AboutDisplay from '../components/displays/aboutDisplay.js';
import TrendingDisplay from '../components/displays/trendingDisplay.js';
import CategoryDisplay from '../components/displays/categoryDisplay.js';
import Header from '../components/Header.js';


//////////////A component that displays according to shop screens navbar////////////////////////////////
function displaySection(props, shops){
    switch (props) {
        case 'about':
            return (
                <AboutDisplay
                call={shops.call}
                address={shops.address}
                ></AboutDisplay>
            )
            break;
        case 'trending':
            return (
                <TrendingDisplay></TrendingDisplay>
            )
            
            break;
        case 'fashionstore':
            return (
                <CategoryDisplay></CategoryDisplay>
            )
            
            break;
    
        default:
            return (
                <div>Sorry, but the selected category does not exist</div>
            )
            break;
    }
}


function ShopScreen(props) {
    const shopId = props.match.params.id;

    ///Connecting to redux store.////
    const dispatch=useDispatch();
    const [display, setDisplay]=useState('about')
    const shopDetail= useSelector(state=> state.shopDetail);
    const{loading, error, shops}=shopDetail;
    useEffect(() => {
        dispatch(detailsShop(shopId));}, 
        [dispatch, shopId])
    return (
        <div>
            <Header name={props.match.params.city}></Header>
        {loading? ( 
            <LoadingBox></LoadingBox>
            ) : error? (
                <MessageBox>{error}</MessageBox>
            ):
            (
                <div className="container full">
                <div className="title-img">
                    <img className='cover-img' src={shops.cover}></img> 
                </div>
                <div className="Shop-name">
                <h1 >{shops.name}</h1>
                <p >{shops.keywords}</p>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                </div>
                <div className="Shop-taskbar">
                    <a onClick={() => setDisplay('about')} className="Shop-taskbar-item">About</a>
                    <a onClick={() => setDisplay('trending')}  className="Shop-taskbar-item">Trending</a>
                    <a onClick={() => setDisplay('fashionstore')}  className="Shop-taskbar-item">Fashion Store</a>
                    <input class="input-text Shop-taskbar-item" type="text" placeholder="Search" aria-label="Search" />
                     <SearchIcon className="new"></SearchIcon>
                </div>
                <hr></hr>
                {/* ///Calling the above defined function///// */}
                {displaySection(`${display}`, shops)}  
                </div>
            )
    }</div>
       
    )
}

export default ShopScreen
