import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import links from './links';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        {links.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />}></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
