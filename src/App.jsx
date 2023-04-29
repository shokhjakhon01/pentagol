import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} index />
      </Routes>
    </>
  );
}

export default App;
