import React from 'react'
import { FaSearch,FaMoneyBillWaveAlt ,FaHandHoldingHeart} from "react-icons/fa";
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className='navbar'>
          <div className="navbar--logo navbar-box">
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--kVvxqFrO--%2Fc_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_880%2Fhttps%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--EHuxZCJh--%2Fc_fill%252Cf_auto%252Cfl_progressive%252Ch_150%252Cq_auto%252Cw_150%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F503407%2Fc85aca03-a34b-4934-a721-42eb45c26637.jpg&f=1&nofb=1'   className='navbar--logo-img navbar-img navbar-comany ' />
          </div>
          <div className="navbar--search navbar-box">
            <FaSearch className='navbar--search-img navbar-img'/>
            <h2 className='navbar--search-text'>Search</h2>
          </div>
          <div className="navbar--offer navbar-box">
            <FaMoneyBillWaveAlt className='navbar--offer-img navbar-img'/>
            <h2 className='navbar--offer-text'>Offers</h2>
          </div>
          <div className="navbar--help navbar-box">
            <FaHandHoldingHeart className='navbar--help-img navbar-img'/>
            <h2 className='navbar--help-text'>Coustomer Care</h2>
          </div>
        </nav>
    )
}