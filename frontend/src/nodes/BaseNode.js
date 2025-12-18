// BaseNode.js
// Base abstraction for all nodes to reduce code duplication

import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  children,
  inputHandles = [],
  outputHandles = [],
  width = 200,
  height = 80,
  style = {},
  className = '',
  titleColor = '#667eea',
}) => {
  const baseStyle = {
    width,
    height: height === 'auto' ? 'auto' : height,
    minHeight: height === 'auto' ? '120px' : undefined,
    border: 'none',
    borderRadius: '16px',
    padding: '0',
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'visible',
    boxSizing: 'border-box',
    ...style,
  };

  return (
    <div style={baseStyle} className={`base-node ${className}`}>
      {/* Input Handles */}
      {inputHandles.map((handle, index) => (
        <Handle
          key={handle.id || `input-${index}`}
          type="target"
          position={Position.Left}
          id={handle.id || `input-${index}`}
          style={{
            width: '16px',
            height: '16px',
            background: '#667eea',
            border: '3px solid #fff',
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)',
            transition: 'all 0.2s ease',
            ...handle.style
          }}
        />
      ))}

      {/* Title Header */}
      {title && (
        <div style={{ 
          background: `linear-gradient(135deg, ${titleColor} 0%, ${titleColor}dd 100%)`,
          color: '#ffffff',
          fontWeight: '700', 
          padding: '12px 18px',
          fontSize: '13px',
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#fff',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
            flexShrink: 0
          }} />
          <span style={{ flex: 1 }}>{title}</span>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60px',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1))',
            pointerEvents: 'none'
          }} />
        </div>
      )}

      {/* Content */}
      <div style={{ 
        flex: '1 1 auto',
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px',
        padding: '16px',
        backgroundColor: '#f8fafc',
        minHeight: '80px',
        overflow: 'visible',
        boxSizing: 'border-box',
        width: '100%',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
      }}>
        {children}
      </div>

      {/* Output Handles */}
      {outputHandles.map((handle, index) => (
        <Handle
          key={handle.id || `output-${index}`}
          type="source"
          position={Position.Right}
          id={handle.id || `output-${index}`}
          style={{
            width: '16px',
            height: '16px',
            background: '#667eea',
            border: '3px solid #fff',
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)',
            transition: 'all 0.2s ease',
            ...handle.style
          }}
        />
      ))}
    </div>
  );
};

