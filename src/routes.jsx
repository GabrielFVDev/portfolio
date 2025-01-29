import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import GetTouch from "./pages/GetTouch/GetTouch";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import TechStack from "./pages/TechStack/TechStack";
import Layout from "./components/Layout";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<GetTouch />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
