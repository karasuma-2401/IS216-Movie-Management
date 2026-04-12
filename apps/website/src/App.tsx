import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}




