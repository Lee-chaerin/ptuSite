import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div>
          <p>
            학교 주소 : <span>17869 경기도 평택시 서동대로 3825 (구 용이동 111번지)</span>
            TEL : <span>031-659-8114</span>
            FAX : <span>031-659-8011</span>
          </p>
          <p>
            학과 사무실 : <span>이공관 4층 420호</span>
            TEL : <span>031-659-8523</span>
          </p>
      </div>
      
      <Link to={'/'} className='logo'>
        <img alt='logo' src='logo.png'/>
        <div className="logoF">
          <h1>평택대학교</h1>
          <h6>PYEONGTAEK UNIVERSITY</h6>
        </div>
      </Link>
    </div>
  )
}

export default Footer;