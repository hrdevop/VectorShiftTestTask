// draggableNode.js

// Global reference to addNodeToCanvas function from UI
let addNodeToCanvasRef = null;

export const setAddNodeToCanvas = (fn) => {
  addNodeToCanvasRef = fn;
};

export const DraggableNode = ({ type, label, icon, iconColor = '#fff' }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    const handleClick = () => {
      if (addNodeToCanvasRef) {
        addNodeToCanvasRef(type);
      }
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        onClick={handleClick}
        style={{ 
          cursor: 'grab', 
          minWidth: '120px', 
          height: '70px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          flexDirection: 'column',
          gap: '8px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          userSelect: 'none',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(102, 126, 234, 0.4), 0 4px 8px rgba(0, 0, 0, 0.15)';
          const iconElement = e.currentTarget.querySelector('[data-icon]');
          if (iconElement) {
            iconElement.style.transform = 'scale(1.2) rotate(5deg)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1)';
          const iconElement = e.currentTarget.querySelector('[data-icon]');
          if (iconElement) {
            iconElement.style.transform = 'scale(1) rotate(0deg)';
          }
        }}
        draggable
      >
        {/* Background glow effect */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease'
        }} />
        
        {/* Icon */}
        {icon && (
          <div 
            data-icon
            style={{
              fontSize: '24px',
              color: iconColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
              zIndex: 1,
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {icon}
          </div>
        )}
        
        {/* Label */}
        <span style={{ 
          color: '#fff', 
          fontWeight: '600',
          fontSize: '12px',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
          letterSpacing: '0.5px',
          zIndex: 1,
          textAlign: 'center'
        }}>
          {label}
        </span>
      </div>
    );
  };
  