// splitNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const SplitNode = ({ id, data }) => {
  const [splitBy, setSplitBy] = useState(data?.splitBy || '');
  const [maxOutputs, setMaxOutputs] = useState(data?.maxOutputs || '2');

  const numOutputs = parseInt(maxOutputs) || 2;
  const outputHandles = Array.from({ length: Math.min(numOutputs, 5) }, (_, i) => ({
    id: `${id}-output${i + 1}`,
    style: i > 0 ? { top: `${(i + 1) * (100 / (numOutputs + 1))}%` } : {}
  }));

  const inputStyle = {
    padding: '10px 12px',
    fontSize: '13px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#1e293b',
    transition: 'all 0.2s ease',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    fontSize: '12px',
    fontWeight: '600',
    color: '#475569',
    marginBottom: '6px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  return (
    <BaseNode
      id={id}
      title="Split"
      titleColor="#f97316"
      inputHandles={[{ id: `${id}-input` }]}
      outputHandles={outputHandles}
      width={260}
      height={Math.max(180, 100 + numOutputs * 25)}
    >
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={labelStyle}>Split By</span>
        <input 
          type="text" 
          value={splitBy} 
          onChange={(e) => setSplitBy(e.target.value)}
          placeholder=", or space"
          style={inputStyle}
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea';
            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e2e8f0';
            e.target.style.boxShadow = 'none';
          }}
        />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={labelStyle}>Max Outputs</span>
        <input 
          type="number" 
          value={maxOutputs} 
          onChange={(e) => setMaxOutputs(e.target.value)}
          min="1"
          max="5"
          style={inputStyle}
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea';
            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e2e8f0';
            e.target.style.boxShadow = 'none';
          }}
        />
      </label>
    </BaseNode>
  );
}

