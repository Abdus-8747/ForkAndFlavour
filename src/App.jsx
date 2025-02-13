import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Success from "./pages/Success";
import Error from "./pages/Error";
import Contact from "./components/UI/Contact";
import Layout from "./Layout/Layout";
import About from "./components/UI/About";
import Github from "./components/UI/Github";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="github" element={<Github />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
