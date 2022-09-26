import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div id="main">
      <div className="main1 width">
        <div>
          <h6>학과 학사일정</h6>
        </div>
      </div>
      <div className="main2">
        <Link to={'/'}><img alt='icon' src='icon.png'/>ICON</Link>
        <Link to={'/'}><img alt='icon' src='icon.png'/>ICON</Link>
        <Link to={'/'}><img alt='icon' src='icon.png'/>ICON</Link>
        <Link to={'/'}><img alt='icon' src='icon.png'/>ICON</Link>
      </div>
      <div className="main3 width">학과 갤러리</div>
      <div className="main4 width">공모전</div>
    </div>
  )
}

export default MainPage;