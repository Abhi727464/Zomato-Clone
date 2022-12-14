import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='max-width header'>
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo" className='header-logo' />
      <div className="header-right">
        <div className="header-location-search">
          <div className="location-wrapper">
            <div className="location-icon-name">
            <i className="fi fi-rr-marker absolute-center location-icon"></i>
            <div>Banglore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
            
          </div>
          <div className='location-search-seperator'></div>
          <div className="header-searchbar">
          <i className="fi fi-rr-search absolute-center search-icon"></i>
          <input type="text"  placeholder='Search for a restraunt, cuisine or a dish' className='search-input'/>
          </div>
        </div>
        <div className='profile-wrapper'>
          <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" className='header-profile-image' />
          <span className='header-username'>Abhay</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>

        </div>
      </div>
    </div>
  )
}

export default Header