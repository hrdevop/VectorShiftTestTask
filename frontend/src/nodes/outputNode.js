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
    padding: '10px 12px',
    fontSize: '14px',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#111827',
    transition: 'all 0.2s ease',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const labelStyle = {
    fontSize: '11px',
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      titleColor="#ef4444"
      inputHandles={[{ id: `${id}-value` }]}
      outputHandles={[]}
      width={280}
      height={230}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={labelStyle}>Field Name</span>
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          style={inputStyle}
          placeholder="Enter output name..."
          onFocus={(e) => {
            e.target.style.borderColor = '#EF4444';
            e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
            e.target.style.outline = 'none';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#E5E7EB';
            e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
          }}
        />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={labelStyle}>Data Type</span>
        <div style={{ position: 'relative' }}>
          <select
            value={outputType}
            onChange={handleTypeChange}
            style={{
              ...inputStyle,
              appearance: 'none',
              paddingRight: '30px',
              cursor: 'pointer'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#EF4444';
              e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
              e.target.style.outline = 'none';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
            }}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
          <div style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: '#94a3b8'
          }}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </label>
    </BaseNode>
  );
}
