import { Routes, Route, useLocation } from "react-router";
import PublicRoutes from "./components/routes/PublicRoutes";
import PrivateRoutes from "./components/routes/PrivateRoutes";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/landing-page/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import DocumentEditor from "./components/document-editor/DocumentEditor";
import HeaderDashboard from "./components/header/HeaderDashboard";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/document-editor" ? <HeaderDashboard /> : <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/document-editor" element={<DocumentEditor />} />
        </Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
