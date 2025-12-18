// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      titleColor="#8b5cf6"
      inputHandles={[
        { id: `${id}-system`, style: { top: `${100 / 3}%` } },
        { id: `${id}-prompt`, style: { top: `${200 / 3}%` } }
      ]}
      outputHandles={[{ id: `${id}-response` }]}
      width={260}
      height={210}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#6B7280',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          Model
        </span>
        <div style={{ position: 'relative' }}>
          <select
            defaultValue="gpt-4"
            style={{
              padding: '10px 12px',
              paddingRight: '30px',
              fontSize: '14px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              color: '#111827',
              outline: 'none',
              width: '100%',
              fontFamily: 'inherit',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.2s ease',
              appearance: 'none',
              cursor: 'pointer'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#8B5CF6';
              e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
            }}
          >
            <option value="gpt-4">GPT-4</option>
            <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
            <option value="claude-3">Claude 3</option>
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
      </div>
    </BaseNode>
  );
}
