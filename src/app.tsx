import React from 'react';
import './app.css';
import { api } from './api';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="details">
        <div className="sidebar">
          {/* Details List */}
        </div>
        <div className="main">
          {/* Detail Edit Panel */}
        </div>
      </div>
    </div>
  );
};
