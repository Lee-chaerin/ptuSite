import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  /* map으로 작성했을 떄 링크 어떡함 ?
  let introduceMenu = ["학과 소개", "전공교수 소개", "임원 소개", "학과 공지", "학과 갤러리"];
  let introduce = introduceMenu.map(function(menu, index){
    return <li key={index}><Link to={''}>{menu}</Link></li>
  });
  */

  return (
    <div id='header'>
      <Link to={'/'} className='logo'>
        <img alt='logo' src='logo.png'/>
        <div className='logoH'>
          <h1>융합소프트웨어학과</h1>
          <h6>Department of Convergence Software</h6>
        </div>
      </Link>

      <div id='navDrop'>
        <ul>
          <li><Link to={'/'}>HOME</Link></li>
          <li>
            <Link to={'/introduce'}>INTRODUCE</Link>
            <ul>
              <li><Link to={''}>학과 소개</Link></li>
              <li><Link to={''}>전공교수 소개</Link></li>
              <li><Link to={''}>임원 소개</Link></li>
              <li><Link to={''}>학과 공지</Link></li>
              <li><Link to={''}>학과 갤러리</Link></li>
            </ul>
          </li>
          <li><Link to={'/project'}>PROJECT</Link></li>
          <li><Link to={'/study'}>STUDY</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;