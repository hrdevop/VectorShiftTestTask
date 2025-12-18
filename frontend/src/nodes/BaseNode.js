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
    minHeight: height === 'auto' ? '100px' : undefined,
    border: '1px solid #E5E7EB',
    borderRadius: '12px', // Slightly more rounded for premium feel
    padding: '0',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)', // Softer shadow with more blur
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <div
      style={baseStyle}
      className={`base-node ${className}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1), 0 12px 24px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Input Handles - Enhanced with better visibility */}
      {inputHandles.map((handle, index) => (
        <Handle
          key={handle.id || `input-${index}`}
          type="target"
          position={Position.Left}
          id={handle.id || `input-${index}`}
          style={{
            width: '10px',
            height: '10px',
            background: '#fff',
            border: `2px solid ${titleColor}`,
            boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.9), 0 2px 4px rgba(0, 0, 0, 0.1)',
            left: '-6px',
            zIndex: 10,
            transition: 'all 0.2s ease',
            ...handle.style
          }}
        />
      ))}

      {/* Header - Better padding */}
      {title && (
        <div style={{
          padding: '16px 16px 12px 16px', // Increased padding
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          {/* Accent Icon - More refined */}
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            backgroundColor: `${titleColor}18`, // Slightly more opacity
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: titleColor,
            flexShrink: 0,
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: titleColor,
              boxShadow: `0 0 0 2px ${titleColor}30`
            }} />
          </div>

          <span style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#111827',
            lineHeight: '1.4',
            letterSpacing: '-0.01em'
          }}>
            {title}
          </span>
        </div>
      )}

      {/* Content - More generous padding */}
      <div style={{
        padding: '0 16px 18px 16px', // Increased bottom padding
        display: 'flex',
        flexDirection: 'column',
        gap: '16px', // Increased gap between elements
        fontSize: '13px',
        color: '#6B7280',
        flex: 1
      }}>
        {children}
      </div>

      {/* Output Handles - Enhanced */}
      {outputHandles.map((handle, index) => (
        <Handle
          key={handle.id || `output-${index}`}
          type="source"
          position={Position.Right}
          id={handle.id || `output-${index}`}
          style={{
            width: '10px',
            height: '10px',
            background: '#fff',
            border: `2px solid ${titleColor}`,
            boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.9), 0 2px 4px rgba(0, 0, 0, 0.1)',
            right: '-6px',
            zIndex: 10,
            transition: 'all 0.2s ease',
            ...handle.style
          }}
        />
      ))}
    </div>
  );
};

