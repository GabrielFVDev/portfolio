import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import GetTouch from "./pages/GetTouch/GetTouch";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Resume from "./pages/Resume/Resume";
import Uses from "./pages/Uses/Uses";
import TechStack from "./pages/TechStack/TechStack";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<GetTouch />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
