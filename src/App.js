import { Route, Routes } from "react-router";
import Calculator from "./page/Calculator";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/calculator" element={<Calculator/>} />
      </Routes>
    </>
  );
}

export default App;
