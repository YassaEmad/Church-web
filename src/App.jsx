import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Masses from "./pages/masses";
import Sermons from "./pages/Sermons";
import Gallery from "./pages/gallery";
import Admin from "./pages/Admin";
import { AuthProvider } from "../../src/contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Router>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/masses" element={<Masses />} />
                  <Route path="/sermons" element={<Sermons />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/admin" element={<Admin />} />
                </Routes>
              </main>
              {/* <Footer /> */}
            </div>
          </Router>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
