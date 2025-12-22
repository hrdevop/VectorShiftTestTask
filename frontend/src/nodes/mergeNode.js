// mergeNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => {
  const [mergeStrategy, setMergeStrategy] = useState(data?.mergeStrategy || 'concat');
  const [separator, setSeparator] = useState(data?.separator || ', ');

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
      title="Merge"
      titleColor="#14b8a6"
      inputHandles={[
        { id: `${id}-input1` },
        { id: `${id}-input2`, style: { top: '50%' } },
        { id: `${id}-input3`, style: { top: '75%' } }
      ]}
      outputHandles={[{ id: `${id}-output` }]}
      width={280}
      height={mergeStrategy === 'join' ? 240 : 180}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={labelStyle}>Strategy</span>
        <div style={{ position: 'relative' }}>
          <select
            value={mergeStrategy}
            onChange={(e) => setMergeStrategy(e.target.value)}
            style={{
              ...inputStyle,
              appearance: 'none',
              paddingRight: '30px',
              cursor: 'pointer'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#14b8a6';
              e.target.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.1)';
              e.target.style.outline = 'none';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
            }}
          >
            <option value="concat">Concatenate</option>
            <option value="join">Join</option>
            <option value="sum">Sum</option>
            <option value="average">Average</option>
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
      {mergeStrategy === 'join' && (
        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={labelStyle}>Separator</span>
          <input
            type="text"
            value={separator}
            onChange={(e) => setSeparator(e.target.value)}
            placeholder=", "
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = '#14b8a6';
              e.target.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.1)';
              e.target.style.outline = 'none';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
            }}
          />
        </label>
      )}
    </BaseNode>
  );
}

