// conditionNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'equals');
  const [value, setValue] = useState(data?.value || '');

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
      title="Condition"
      titleColor="#f59e0b"
      inputHandles={[
        { id: `${id}-input` },
        { id: `${id}-compare`, style: { top: '60%' } }
      ]}
      outputHandles={[
        { id: `${id}-true` },
        { id: `${id}-false`, style: { top: '60%' } }
      ]}
      width={280}
      height={230}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={labelStyle}>Condition</span>
        <div style={{ position: 'relative' }}>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            style={{
              ...inputStyle,
              appearance: 'none',
              paddingRight: '30px',
              cursor: 'pointer'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#f59e0b';
              e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.1)';
              e.target.style.outline = 'none';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
            }}
          >
            <option value="equals">Equals</option>
            <option value="greater">Greater Than</option>
            <option value="less">Less Than</option>
            <option value="contains">Contains</option>
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
      <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={labelStyle}>Value</span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value..."
          style={inputStyle}
          onFocus={(e) => {
            e.target.style.borderColor = '#f59e0b';
            e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.1)';
            e.target.style.outline = 'none';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#E5E7EB';
            e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
          }}
        />
      </label>
    </BaseNode>
  );
}

