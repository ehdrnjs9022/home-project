import React from "react";
import styled from "styled-components";
import { HeaderBox,NavLink } from "./Common.styles";
import { Navigate, useNavigate } from "react-router-dom";



const Main = () => {
    const navi = useNavigate();

    const handleClick = (path) => {
      Navigate(path);
    }
  return (
    <>
     

        <HeaderBox>
          <NavLink onClick={() => handleClick('/notice')}>공지사항</NavLink>
          <NavLink onClick={() => handleClick('/board')}>게시판</NavLink>    
          <NavLink onClick={() => handleClick('/signup')}>회원가입</NavLink>    
          <NavLink onClick={() => handleClick('/login')}>로그인</NavLink>    
          <NavLink onClick={() => handleClick('/logout')}>로그아웃</NavLink>    
          </HeaderBox>
        
        const 
        

        

   </>
  );
};

export default Main;
