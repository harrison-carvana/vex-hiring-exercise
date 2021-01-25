import React from 'react';

import './styles.css';

export const Input = ({ label, type, value, onChange }) => (
  <label>
    {label}
    <input className="vexInput" type={type} value={value} onChange={onChange} />
  </label>
);
