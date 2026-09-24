import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/search/:category" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
