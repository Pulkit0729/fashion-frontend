import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Fashion</a>
  <div className="collapse navbar-collapse" id="navbarScroll">
  <form className="d-flex">
    <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Location
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
          <li><a className="dropdown-item" href="#">SelectLocation</a></li>
          <li><a className="dropdown-item" href="#">Set automatic</a></li>
        </ul>
      <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <ul className="navbar-nav ml-auto my-2 my-lg-0 navbar-nav-scroll" style={{maxHeight: '100px'}}>
      <li className="nav-item active">
        <a className="nav-link" href="#">Log IN <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sign Up</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Favorites</a>
      </li>
      <li className="nav-item new">
        <FavoriteIcon />
      </li>
      <li className="nav-item ">
        <p>0</p>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Header
