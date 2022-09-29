import React from "react";

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
            <li>‣<a href="/introduce/introduce.html">학과 소개</a></li>
            <li>‣<a href="/introduce/professor.html">전공교수 소개</a></li>
            <li>‣<a href="/introduce/member.html">임원 소개</a></li>
            <li>‣<a href="/introduce/notice.html">학과 공지</a></li>
            <li>‣<a href="/introduce/gallery.html">학과 갤러리</a></li>
          </ul> 
        </div>          
        <div className="introduce2">오른쪽</div>
      </div>  
    </div>
  )
}

export default IntroducePage;