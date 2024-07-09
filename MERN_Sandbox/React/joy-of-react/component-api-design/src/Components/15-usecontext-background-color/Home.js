import React from 'react';

import Sidebar from './Sidebar';

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <main>
        <h1>
          This is a placeholder for a corporate slogan
        </h1>
        <p>This almost looks like a real website!</p>
      </main>
    </div>
  );
}

export default Home;