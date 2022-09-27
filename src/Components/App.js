import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Layout from './Page/Layout';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import Projects from './Projects/Projects';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="about" element={<About/>} />
          <Route path="projects" element={<Projects/>} />
        </Route>
      </Routes>
    </Router>
  );
}
