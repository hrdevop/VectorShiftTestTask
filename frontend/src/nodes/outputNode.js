// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const inputStyle = {
    padding: '10px 14px',
    fontSize: '13px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    color: '#1e293b',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  };

  const labelStyle = {
    fontSize: '11px',
    fontWeight: '700',
    color: '#64748b',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    display: 'block',
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      titleColor="#ef4444"
      inputHandles={[{ id: `${id}-value` }]}
      width={260}
      height={180}
    >
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={labelStyle}>Name</span>
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange}
          style={inputStyle}
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea';
            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e2e8f0';
            e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
            e.target.style.transform = 'translateY(0)';
          }}
        />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={labelStyle}>Type</span>
        <select 
          value={outputType} 
          onChange={handleTypeChange} 
          style={{
            ...inputStyle,
            cursor: 'pointer',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23475569' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 12px center',
            paddingRight: '36px',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea';
            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e2e8f0';
            e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
}
