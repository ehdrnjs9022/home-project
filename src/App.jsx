import "./App.css";
import Header from "./components/Home/Header.jsx";
import Footer from "./components/Home/Footer.jsx";
import { Layout, MainContent } from "./components/Home/Common.styles.js";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <MainContent></MainContent>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
