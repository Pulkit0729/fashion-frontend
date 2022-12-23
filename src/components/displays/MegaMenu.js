import React from 'react'

/////Function for converting arrays into divs/////
function arrayconverter(props) {
    return(
        <a class="dropdown-item" href="#">{props}</a>
    )};
export function MegaMenuMen() {
    const top=["Shirts","T-Shirts","Kurtas","Jackets","Sweaters","Sweat-Shirt","Blazer","Waist-Coat"];
    const bottom=["Jeans", "Trousers","Shorts","Cargos","Pyjamas","Track Pants","Capries"];
    const Full=["Suits", "2-piece","Sherwani"];
    const Footwear=["Socks"];
    const Innerwear=["Top Vests", "Bottoms"];
    return (
        <div>
            <li class="nav-item px-4 dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Men</a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="servicesDropdown">
                    <div class="d-md-flex align-items-start justify-content-start">
                        <div>
                            <div class="dropdown-header">Men Topwear</div>
                            {top.map(arrayconverter)}
                        </div>
                        <div>
                            <div class="dropdown-header">Men Bottom Wear</div>
                            {bottom.map(arrayconverter)}
                        </div>
                        <div>
                            <div class="dropdown-header">Men Innerwear Wear</div>
                            {Innerwear.map(arrayconverter)}
                       
                            <div class="dropdown-header">Men Full Wear</div>
                            {Full.map(arrayconverter)}
                       
                            <div class="dropdown-header">Men Footwear</div>
                            {Footwear.map(arrayconverter)}
                        </div> 
                    </div>
                </div>
            </li>
        </div>
    )
}

export function MegaMenuWomen() {
    const top=["Shirts","Tops","Western Topwear","Jackets","Sweaters","Blazer"];
    const bottom=["Jeans", "Trousers","Shorts","Skirst","Jeggings","Capries"];
    const Ethnic=["Suits", "Saarees","kurti","Lehngaa","Ethnic Gowns"];
    const Footwear=["Socks"];
    const Innerwear=["Bras", "Panties","Lingerie"];
    const Western=["Gowns", "Dresses"];
    return (
        <div>
            <li class="nav-item px-4 dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Women</a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="servicesDropdown">
                    <div class="d-md-flex align-items-start justify-content-start">
                        <div>
                            <div class="dropdown-header">Women Topwear</div>
                            {top.map(arrayconverter)}
                            <div class="dropdown-header">Men Innerwear Wear</div>
                            {Western.map(arrayconverter)}
                        </div>
                        <div>
                            <div class="dropdown-header">Women Bottom Wear</div>
                            {bottom.map(arrayconverter)}
                            <div class="dropdown-header">Women Footwear</div>
                            {Footwear.map(arrayconverter)}
                        </div>
                        <div>
                            <div class="dropdown-header">Women Ethnic Wear</div>
                            {Ethnic.map(arrayconverter)}
                            <div class="dropdown-header">Men Innerwear Wear</div>
                            {Innerwear.map(arrayconverter)}    
                        </div> 
                    </div>
                </div>
            </li>
        </div>
    )
}
export function MegaMenuKids() {
    const Boys=["Shirts","T-Shirts","Jackets","Sweaters","Sweat-Shirt","Jeans", "Pants","Shorts","Pyjamas","Capries","Innerwear"];
    const Girls=["Tops", "Shirts","Jeans","Shorts","Skirts","Dresses","Innerwear"];
    const Baby=["Topwear","Bottom Wear","Innerwear", "Combo Set"]
    return (
        <div>
            <li class="nav-item px-4 dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kids</a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="servicesDropdown">
                    <div class="d-md-flex align-items-start justify-content-start">
                        <div>
                            <div class="dropdown-header">Boys</div>
                            {Boys.map(arrayconverter)}
                        </div>
                        <div>
                            <div class="dropdown-header">Girls</div>
                            {Girls.map(arrayconverter)}
                            </div>
                            <div>
                            <div class="dropdown-header">Babies</div>
                            {Baby.map(arrayconverter)}
                            </div>
                        
                    </div>
                </div>
            </li>
        </div>
    )
}
export function MegaMenuAccessories() {
    const accessories =["Ties","Bands","Watches", "Hats & Caps"]
    return (
        <div>
            <li class="nav-item px-4 dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accessories</a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="servicesDropdown">
                    <div class="d-md-flex align-items-start justify-content-start">
                        <div>
                            <div class="dropdown-header">Accessories</div>
                            {accessories.map(arrayconverter)}
                        </div> 
                    </div>
                </div>
            </li>
        </div>
    )
}


