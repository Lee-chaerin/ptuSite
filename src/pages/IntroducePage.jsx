import React from "react";
import { Link } from "react-router-dom";

const IntroducePage = () => {
  return (
    <div id="introduce">
      <div className="top">
        <h1>INTRODUCE</h1>
      </div>
      <div>
        <div className="introduce1">
          <h1>INTRODUCE</h1>
          <ul>
            <li>‣<Link to={''}>학과 소개</Link></li>
            <li>‣<Link to={''}>전공교수 소개</Link></li>
            <li>‣<Link to={''}>임원 소개</Link></li>
            <li>‣<Link to={''}>학과 공지</Link></li>
            <li>‣<Link to={''}>학과 갤러리</Link></li>
          </ul> 
        </div>          
        <div className="introduce2">오른쪽</div>
      </div>  
    </div>
  )
}

export default IntroducePage;