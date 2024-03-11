import { Route, Routes } from "react-router";
import { ServicePage } from "./pages/services/ServicePage";
import { ServiceDetalisPage } from "./pages/services/ServiceDetalisPage";
import { Header } from "./components/header";
import AboutPage from "./pages/aboutPage/AboutPage";
import {ContactUs} from "./pages/contactUs/ContactUs";
import {HomePage} from "./pages/homePage/HomePage";
import { Calculator } from "./pages/calculator/Calculator";
import { Navigate } from "react-router/dist";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/details" element={<ServiceDetalisPage />} />
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  );
}

export default App;
