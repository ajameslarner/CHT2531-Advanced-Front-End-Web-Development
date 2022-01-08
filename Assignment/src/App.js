import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navigation } from './web-components';

function App() {
  return (
    <div className="App">
      <div className="Navigation">
        <Navigation />

      </div>
      <div className="Main">
        
      </div>
      <div className="End">
        
      </div>
    </div>
  );
}

export default App;