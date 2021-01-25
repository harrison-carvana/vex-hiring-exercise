import React from 'react';

import './styles.css';

export const Dropdown = ({ label, options, onChange }) => (
  <label>
    {label}
    <select className="vexDropdown" onChange={(e) => onChange(e)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.display}
        </option>
      ))}
    </select>
  </label>
);
