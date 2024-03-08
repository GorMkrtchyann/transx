import { Route, Routes } from "react-router";
import {Calculator} from "./pages/calculator/Calculator";
import { Header } from "./components/header";
import AboutPage from "./pages/aboutPage/AboutPage";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path="/calculator" element={<Calculator/>} />
            <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </>
  );
}

export default App;
