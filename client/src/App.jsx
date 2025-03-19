import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/landing-page/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import DocumentEditor from "./components/document-editor/DocumentEditor";

function App() {
  return (
    <>
      <Header></Header>

      <LandingPage></LandingPage>
      {/* <Login></Login>
      <Register></Register>
      <DocumentEditor></DocumentEditor> */}

      <Footer></Footer>
    </>
  );
}

export default App;
