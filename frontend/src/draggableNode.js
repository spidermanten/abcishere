

import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  reactFlowInstance: state.reactFlowInstance,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
});

export const DraggableNode = ({ type, label }) => {
  const { reactFlowInstance, getNodeID, addNode } = useStore(selector, shallow);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const addNodeAtPosition = (x, y) => {
    if (!reactFlowInstance) return;

    const nodeID = getNodeID(type);
    const newNode = {
      id: nodeID,
      type,
      position: { x, y },
      data: { id: nodeID, nodeType: `${type}` },
    };

    addNode(newNode);
  };

  const onTouchEnd = (event) => {
    // Basic touch support: check if dropped on canvas
    const touch = event.changedTouches[0];
    const clientX = touch.clientX;
    const clientY = touch.clientY;

    const element = document.elementFromPoint(clientX, clientY);
    const flowWrapper = element?.closest('.react-flow');

    if (flowWrapper && reactFlowInstance) {
      const flowBounds = flowWrapper.getBoundingClientRect();
      const position = reactFlowInstance.project({
        x: clientX - flowBounds.left,
        y: clientY - flowBounds.top,
      });
      addNodeAtPosition(position.x, position.y);
    }
  };

  const handleClick = () => {
    // Add to center if clicked/tapped
    if (reactFlowInstance) {
      // rough center estimate or use getViewport
      // We can just add it at a default visible position or random offset if we don't want to calculate center perfectly
      const zoom = reactFlowInstance.getZoom();
      // If we allow click-to-add, it's a good fallback. 
      // Let's add it at a generally safe position (e.g. 100, 100) adjusted by view?
      // Better: center of current view.
      // Since we don't have easy view center without bounds, let's just use strict (100, 200) + random jitter to see multiple
      const id = getNodeID(type);
      const newNode = {
        id,
        type,
        position: { x: Math.random() * 100, y: Math.random() * 100 + 100 },
        data: { id, nodeType: `${type}` },
      }
      addNode(newNode);
    }
  }

  return (
    <div
      className={`${type} cursor-grab min-w-[80px] h-[40px] md:min-w-[100px] md:h-[50px] flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary-purple-dark/50 to-primary-purple/40 backdrop-blur-md border border-primary-purple-light/30 shadow-[0_4px_16px_0_rgba(124,58,237,0.3),inset_0_1px_0_0_rgba(255,255,255,0.1)] relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_24px_0_rgba(124,58,237,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-primary-purple-light/50`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      onTouchEnd={onTouchEnd}
      onClick={handleClick}
      draggable
    >
      <span className="text-text-secondary font-semibold text-xs md:text-[13px] tracking-wide drop-shadow-[0_2px_8px_rgba(124,58,237,0.5)]">
        {label}
      </span>
    </div>
  );
};
