// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      titleColor="#8b5cf6"
      inputHandles={[
        { id: `${id}-system`, style: { top: `${100/3}%` } },
        { id: `${id}-prompt`, style: { top: `${200/3}%` } }
      ]}
      outputHandles={[{ id: `${id}-response` }]}
      width={260}
      height="auto"
    >
      <div style={{ 
        padding: '20px 24px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '2px solid #e2e8f0',
        fontSize: '14px',
        color: '#475569',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: '600',
        lineHeight: '1.8',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80px',
        boxSizing: 'border-box',
        wordWrap: 'break-word',
        overflow: 'visible',
        whiteSpace: 'normal'
      }}>
        Large Language Model
      </div>
    </BaseNode>
  );
}
