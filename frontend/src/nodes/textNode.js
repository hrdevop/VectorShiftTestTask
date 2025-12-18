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
  const [nodeDimensions, setNodeDimensions] = useState({ width: 200, height: 100 });

  // Extract variables from text
  const variables = useMemo(() => extractVariables(currText), [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Auto-resize based on content
  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      // Reset height to get accurate scrollHeight
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      
      // Calculate new dimensions
      const minWidth = 200;
      const minHeight = 100;
      const maxWidth = 400;
      const maxHeight = 300;
      
      // Width based on content (rough estimate: ~10px per character)
      const estimatedWidth = Math.min(maxWidth, Math.max(minWidth, currText.length * 8 + 40));
      
      // Height based on scroll height
      const newHeight = Math.min(maxHeight, Math.max(minHeight, scrollHeight + 60));
      
      setNodeDimensions({ width: estimatedWidth, height: newHeight });
    }
  }, [currText]);

  // Create input handles for variables
  const inputHandles = variables.map((varName, index) => ({
    id: `${id}-${varName}`,
    style: {
      top: `${30 + (index * 25)}px`,
    }
  }));

  return (
    <BaseNode
      id={id}
      title="Text"
      titleColor="#3b82f6"
      width={nodeDimensions.width}
      height={nodeDimensions.height}
      inputHandles={inputHandles}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span style={{ 
          fontSize: '11px',
          fontWeight: '700',
          color: '#64748b',
          marginBottom: '8px',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          display: 'block',
        }}>
          Text
        </span>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={{
            padding: '12px 14px',
            fontSize: '13px',
            resize: 'none',
            border: '2px solid #e2e8f0',
            borderRadius: '10px',
            minHeight: '80px',
            width: '100%',
            fontFamily: 'inherit',
            backgroundColor: '#ffffff',
            color: '#1e293b',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            outline: 'none',
            lineHeight: '1.5',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
          }}
          placeholder="Enter text with {{ variables }}"
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
      {variables.length > 0 && (
        <div style={{ 
          fontSize: '11px', 
          color: '#64748b',
          marginTop: '8px',
          padding: '8px 12px',
          backgroundColor: '#f1f5f9',
          borderRadius: '6px',
          border: '1px solid #e2e8f0'
        }}>
          <strong style={{ color: '#475569' }}>Variables:</strong> {variables.map((v, i) => (
            <span key={v} style={{ 
              display: 'inline-block',
              marginLeft: '6px',
              padding: '2px 8px',
              backgroundColor: '#667eea',
              color: '#fff',
              borderRadius: '4px',
              fontSize: '10px',
              fontWeight: '600'
            }}>
              {v}
            </span>
          ))}
        </div>
      )}
    </BaseNode>
  );
}
