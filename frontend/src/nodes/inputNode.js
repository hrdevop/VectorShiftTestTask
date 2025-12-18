// inputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
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
      title="Input"
      titleColor="#10b981"
      inputHandles={[]}
      outputHandles={[{ id: `${id}-value` }]}
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
          placeholder="Enter name..."
          onFocus={(e) => {
            e.target.style.borderColor = '#10B981';
            e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
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
            value={inputType}
            onChange={handleTypeChange}
            style={{
              ...inputStyle,
              appearance: 'none',
              paddingRight: '30px',
              cursor: 'pointer'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#10B981';
              e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
              e.target.style.outline = 'none';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
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
