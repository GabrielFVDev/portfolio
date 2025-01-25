import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import GetTouch from "./pages/GetTouch/GetTouch";
import Resume from "./pages/Resume/Resume";
import Uses from "./pages/Uses/Uses";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/gettouch" element={<GetTouch />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
