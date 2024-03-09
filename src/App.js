import { Route, Routes } from "react-router";
import {Calculator} from "./pages/calculator/Calculator";
import { Header } from "./components/header";
import AboutPage from "./pages/aboutPage/AboutPage";
import {ContactUs} from "./pages/contactUs/ContactUs";
import {HomePage} from "./pages/homePage/HomePage";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/calculator" element={<Calculator/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </>
  );
}

export default App;
