import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Fashion</a>
     
     
      <div className="search">
      <a className="nav-link dropdown-toggle " href="/" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
        {props.name}
        </a>
      <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
        <li><a className="dropdown-item" href="/">SelectLocation</a></li>
        <li><a className="dropdown-item" href="/">Set automatic</a></li>
      </ul>
        <input class="input-text" type="text" placeholder="Search" aria-label="Search" />
        <SearchIcon className="new"></SearchIcon>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Log IN <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Sign Up</a>
          </li>
          <li className="nav-item">
            <div className="different">
            <FavoriteIcon className="new" />
            <p>0</p>
            </div>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}

export default Header
