import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center">
        <BrowserRouter>
          <h1 className="text-sm">React-Router-URL-Parameters-and-Query-Strings</h1>
          <Routes>
            <Route path="/search/:category" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
