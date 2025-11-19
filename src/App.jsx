import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

const Home = React.lazy(() => import("./pages/Home"));
const News = React.lazy(() => import("./pages/News"));
const Masses = React.lazy(() => import("./pages/Masses"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Admin = React.lazy(() => import("./pages/Admin"));

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function AppRoutes() {
  return (
    <>
      <Navbar />
      <main className="mx-6 my-14 md:mx-12 xl:mx-60">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/masses" element={<Masses />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
