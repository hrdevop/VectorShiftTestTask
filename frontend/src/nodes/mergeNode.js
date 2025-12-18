// mergeNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => {
  const [mergeStrategy, setMergeStrategy] = useState(data?.mergeStrategy || 'concat');
  const [separator, setSeparator] = useState(data?.separator || ', ');

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
      title="Merge"
      titleColor="#14b8a6"
      inputHandles={[
        { id: `${id}-input1` },
        { id: `${id}-input2`, style: { top: '50%' } },
        { id: `${id}-input3`, style: { top: '75%' } }
      ]}
      outputHandles={[{ id: `${id}-output` }]}
      width={260}
      height={mergeStrategy === 'join' ? 220 : 180}
    >
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={labelStyle}>Strategy</span>
        <select 
          value={mergeStrategy} 
          onChange={(e) => setMergeStrategy(e.target.value)}
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
            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e2e8f0';
            e.target.style.boxShadow = 'none';
          }}
        >
          <option value="concat">Concatenate</option>
          <option value="join">Join</option>
          <option value="sum">Sum</option>
          <option value="average">Average</option>
        </select>
      </label>
      {mergeStrategy === 'join' && (
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={labelStyle}>Separator</span>
          <input 
            type="text" 
            value={separator} 
            onChange={(e) => setSeparator(e.target.value)}
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
      )}
    </BaseNode>
  );
}

