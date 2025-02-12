import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import Contact from "./components/Contact";
import Layout from "./Layout/Layout";
import About from "./components/UI/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap Layout around the child routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="success" element={<Success />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
