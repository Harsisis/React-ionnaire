import React from 'react';
import { Link } from 'react-router-dom';

import links from './links';

function Home() {
  return (
    <ul>
      {links.map(({ path }) => (
        <li key={path}>
          <Link to={path}>{path}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Home;
