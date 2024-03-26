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
      <Routes>
          <Route path="/:lang" element={<HomePage/>} />
        <Route path="/about/:lang" element={<AboutPage/>} />
        <Route path="/contact/:lang" element={<ContactUs/>} />
        <Route path="/calculator/:lang" element={<Calculator />} />
        <Route path="/service/:lang" element={<ServicePage />} />
        <Route path="/service/details/:lang" element={<ServiceDetalisPage />} />
        <Route path="*" element={<Navigate to="/en"/>}/>
      </Routes>
    </>
  );
}

export default App;
