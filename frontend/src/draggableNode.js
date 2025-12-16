

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`${type} cursor-grab min-w-[100px] h-[70px] flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary-purple-dark/50 to-primary-purple/40 backdrop-blur-md border border-primary-purple-light/30 shadow-[0_4px_16px_0_rgba(124,58,237,0.3),inset_0_1px_0_0_rgba(255,255,255,0.1)] relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_24px_0_rgba(124,58,237,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-primary-purple-light/50`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <span className="text-text-secondary font-semibold text-[13px] tracking-wide drop-shadow-[0_2px_8px_rgba(124,58,237,0.5)]">
        {label}
      </span>
    </div>
  );
};
