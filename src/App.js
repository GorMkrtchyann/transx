import { Route, Routes } from "react-router";
import { Calculator } from "./page/calculator/Calculator";
import { Header } from "./components/header";
import AboutPage from "./page/aboutPage/AboutPage";
import { ServicePage } from "./page/services/ServicePage";
import { ServiceDetalisPage } from "./page/services/ServiceDetalisPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/detalis" element={<ServiceDetalisPage />} />

      </Routes>
    </>
  );
}

export default App;
