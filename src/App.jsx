import { HashRouter, Routes, Route } from "react-router-dom";
import Hero2 from "./components/Hero2";
import Learn from "./pages/Learn";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<Hero2 />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;