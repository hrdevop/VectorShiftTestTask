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
        minWidth: '90px',
        height: '90px',
        width: '90px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '6px',
        borderRadius: '16px',
        background: '#fff',
        border: '1px solid #E5E7EB',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s ease',
        userSelect: 'none',
        position: 'relative',
        padding: '8px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#7c3aed';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(124, 58, 237, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E5E7EB';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
      }}
      draggable
    >
      {/* Icon */}
      {icon && (
        <div
          style={{
            fontSize: '32px',
            color: '#4B5563', // Charcoal grey icon
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '4px'
          }}
        >
          {icon}
        </div>
      )}

      {/* Label */}
      <span style={{
        color: '#374151',
        fontWeight: '500',
        fontSize: '12px',
        textAlign: 'center'
      }}>
        {label}
      </span>
    </div>
  );
};
