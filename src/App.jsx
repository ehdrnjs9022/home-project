import Header from "./components/Home/Header.jsx";
import Footer from "./components/Home/Footer.jsx";
import { Layout, MainContent } from "./components/Home/Common.styles.js";
import React from 'react';
import Main from "./components/Home/Main.jsx";
import Signup from "./components/Home/Signup.jsx";
import { Router,Route } from "react-router-dom";
import Login from "./components/Home/Login.jsx";
import Logout from "./components/Home/Logout.jsx";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <MainContent>
          <Main>
            <Router>
              <Route path="/" element={<Main/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/board" element={<Board/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/*" element={<h1>존재하지 않는 페이지 요청 입니다.</h1>}/>
              
              </Router>
          </Main>
        </MainContent>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
