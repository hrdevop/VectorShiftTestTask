// textNode.js

import { useState, useMemo, useRef, useEffect } from 'react';
import { BaseNode } from './BaseNode';

// Helper function to extract variables from text (e.g., "{{ variable }}" -> ["variable"])
const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const variables = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    const varName = match[1];
    if (!variables.includes(varName)) {
      variables.push(varName);
    }
  }
  return variables;
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);

  // Extract variables from text
  const variables = useMemo(() => extractVariables(currText), [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Create input handles for variables - limit to fit within node height
  const maxVisibleHandles = 5; // Limit handles to fit within 240px height
  const visibleVariables = variables.slice(0, maxVisibleHandles);

  const inputHandles = visibleVariables.map((varName, index) => ({
    id: `${id}-${varName}`,
    style: {
      top: `${60 + (index * 35)}px`, // Start at 60px, space 35px apart
    }
  }));

  const inputStyle = {};

  return (
    <BaseNode
      id={id}
      title="Text"
      titleColor="#3b82f6"
      width={280}
      height={240}
      inputHandles={inputHandles}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '6px' }}>
        <span style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#6B7280',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          Text Content
        </span>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={{
            padding: '10px 12px',
            resize: 'none',
            minHeight: '80px',
            lineHeight: '1.5',
            backgroundColor: '#ffffff',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none',
            width: '100%',
            fontFamily: 'inherit',
            color: '#111827',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.2s ease',
          }}
          placeholder="Enter text with {{ variables }}..."
          onFocus={(e) => {
            e.target.style.borderColor = '#3B82F6';
            e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#E5E7EB';
            e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
          }}
        />
      </label>
      {variables.length > 0 && (
        <div style={{
          fontSize: '11px',
          color: '#6B7280',
          padding: '10px 12px',
          backgroundColor: '#F9FAFB',
          borderRadius: '6px',
          border: '1px solid #E5E7EB',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          alignItems: 'center',
          maxHeight: '80px',
          overflowY: 'auto'
        }}>
          <strong style={{ color: '#374151', fontSize: '11px', fontWeight: '600' }}>Variables:</strong>
          {variables.map((v, i) => (
            <span key={v} style={{
              display: 'inline-block',
              padding: '3px 8px',
              backgroundColor: '#3B82F6',
              color: '#fff',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}>
              {v}
            </span>
          ))}
        </div>
      )}
    </BaseNode>
  );
}
