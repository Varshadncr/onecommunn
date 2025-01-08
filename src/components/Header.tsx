import React from 'react';
import '../styles/Header.css';


const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header-contact">
        <span>📞 9731125090, 9731125090</span>
        <span>✉ unitedbuildpro@gmail.com</span>
        <span>📍 #63/A E Block, 2nd Stage, Dr. Rajkumar Road, Bangalore - 560010</span>
      </div>
      <div className="header-icons">
  <a href="#"><img className="w-6 h-6 icons" src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736320195/white-facebook-icon-png-facebook-logo-facebook-facebook-fortnite-logo-transparent-white-11562907815wcbclgonet_oa5kcg-removebg-preview_bkgscc.png" alt="Facebook" /></a>
  <a href="#"><img className="w-6 h-6 icons" src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736320196/hd-white-twitter-bird-logo-icon-png-701751694781835zcpqy8so3y_kk9fhi-removebg-preview_midxkp.png" alt="Twitter" /></a>
  <a href="#"><img className="w-6 h-6 icons" src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736319931/vimeo-icon-512x444-8h4tlxrv_ujbkir.png" alt="viemeo" /></a>
 
  <a href="#"><img className="w-6 h-6 icons " src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736320197/indian-flag-badge_neqx3e-removebg-preview_mbuu0y.png" alt="IN" /><span className="text-in">IN</span></a>
</div>

    </div>
  );
};

export default Header;
