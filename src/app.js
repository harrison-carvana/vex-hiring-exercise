import React from 'react';
import './app.css';

// import { api } from './api';

export const InterviewApp = () => {
  return (
    <div className="app">
      <div className="details">
        <div className="sidebar">{/* List of details here */}</div>

        <div className="main">
          {/* Selected detail here */}
          {/* Edit name (required) and description */}
        </div>
      </div>
    </div>
  );
};

// class App {
//   constructor(props) {
//     super(props);

//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="details">
//           <div className="sidebar"></div>
//           <div className="main"></div>
//         </div>
//       </div>
//     );
//   }
// }

// export const InterviewApp = new Project();
