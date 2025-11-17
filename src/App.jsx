import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Masses from "./pages/Masses";
import Sermons from "./pages/Sermons";
import Gallery from "./pages/Gallery";
import Admin from "./pages/Admin";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/masses" element={<Masses />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
