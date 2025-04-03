import styled from "styled-components";
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   height: 100vh;
   background-color: #f4f4f4;
`;
export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

export const StyledHeader = styled.header`
  background: #4e91f9;
  font-size: 30px;
  height: 150px;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  justify-content: center;
`;

export const StyledFooter = styled.footer`
  background: #222;
  height: 60px;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 100%;
  height: 150px;
`;

export const NavLink = styled.a`
  background-color: #4e91f9;
  color: white; 
  padding: 15px 70px; 
  border: none;
  border-radius: 5px; 
  cursor: pointer; 
  text-decoration-line : none;
  

  &:hover {
    background-color: #357ad1; 
  }

  &:active {
    background-color: #2c6bb3; 
  }
`;
export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between; 
  gap: 20px; 
  width: 100%;
  padding: 20px;
  background-color: #f4f4f4;
`;

export const LoginForm = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 100px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border : 2px soild black;
  
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 50px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

`;
export const SignupForm = styled.form`
  width:400px;
  padding: 30px;
  background-color: white;
  box-shadow : 0 4px 8px rgba(0,0,0,0.1);
  boder-radius: 8px;



`;
export const BoardForm = styled.form`
  width: 400px;
  padding: 30px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
export const Button = styled.button`
  background-color: #4e91f9;
  color: white; 
  padding: 15px 70px; 
  border: none;
  border-radius: 5px; 
  cursor: pointer; 
  text-decoration-line : none;
  

  &:hover {
    background-color: #357ad1; 
  }

  &:active {
    background-color: #2c6bb3; 
  }
`;
export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;