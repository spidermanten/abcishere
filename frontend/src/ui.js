

import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { TestNode } from './nodes/TestNode'
import { ConditionalNode } from './nodes/conditionalNode';
import { TransformNode } from './nodes/transformNode';
import { FilterNode } from './nodes/filterNode';
import { SplitNode } from './nodes/splitNode';
import { DelayNode } from './nodes/delayNode';
import { MergeNode } from './nodes/mergeNode';
import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  test: TestNode,
  conditional: ConditionalNode,
  transform: TransformNode,
  filter: FilterNode,
  split: SplitNode,
  delay: DelayNode,
  merge: MergeNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setReactFlowInstance: state.setReactFlowInstance,
});


const defaultEdgeOptions = {
  type: 'smoothstep',
  animated: true,
  style: {
    stroke: '#a78bfa',
    strokeWidth: 2,
    strokeDasharray: '5, 5',
  },
};

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setReactFlowInstance: setStoreReactFlowInstance
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  }

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData('application/reactflow')) {
        const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
        const type = appData?.nodeType;

        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <>
      <div ref={reactFlowWrapper} className="w-full h-full relative bg-transparent">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={(instance) => {
            setReactFlowInstance(instance);
            setStoreReactFlowInstance(instance);
          }}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType='smoothstep'
          defaultEdgeOptions={defaultEdgeOptions}
          connectionLineStyle={{
            stroke: '#a78bfa',
            strokeWidth: 2,
            strokeDasharray: '5, 5',
          }}
          className="bg-transparent"
        >
          <Background
            color="rgba(167, 139, 250, 0.15)"
            gap={gridSize}
            className="bg-transparent"
          />
          <Controls
            className="!bg-gradient-to-br !from-primary-purple-dark/40 !to-primary-purple/30 !backdrop-blur-md !border !border-primary-purple-light/30 !rounded-lg !shadow-[0_4px_16px_0_rgba(124,58,237,0.3)] [&>button]:!bg-transparent [&>button]:!border-primary-purple-light/20 [&>button]:!text-text-secondary hover:[&>button]:!bg-primary-purple-dark/50 hover:[&>button]:!text-white [&>button_svg]:!fill-current"
          />
          <MiniMap
            nodeColor={() => '#7c3aed'}
            maskColor="rgba(15, 10, 31, 0.8)"
            className="!bg-gradient-to-br !from-primary-purple-dark/40 !to-primary-purple/30 !backdrop-blur-md !border !border-primary-purple-light/30 !rounded-lg !shadow-[0_4px_16px_0_rgba(124,58,237,0.3)] !w-[120px] !h-[90px] md:!w-[unset] md:!h-[unset]"
          />
        </ReactFlow>
      </div>
    </>
  )
}
