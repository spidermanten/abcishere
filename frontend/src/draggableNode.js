// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '100px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.5) 0%, rgba(109, 40, 217, 0.4) 100%)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(167, 139, 250, 0.3)',
        boxShadow: '0 4px 16px 0 rgba(124, 58, 237, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 24px 0 rgba(124, 58, 237, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)';
        e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 16px 0 rgba(124, 58, 237, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.3)';
      }}
      draggable
    >
      <span style={{
        color: '#e9d5ff',
        fontWeight: 600,
        fontSize: '13px',
        letterSpacing: '0.5px',
        textShadow: '0 2px 8px rgba(124, 58, 237, 0.5)',
      }}>
        {label}
      </span>
    </div>
  );
};
