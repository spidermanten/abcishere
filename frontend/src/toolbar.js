

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-3 bg-gradient-to-br from-primary-purple-dark/20 to-primary-purple/15 backdrop-blur-md border-b border-primary-purple-light/20 shadow-[0_4px_16px_0_rgba(124,58,237,0.1)]">
            <h2 className="m-0 mb-4 text-text-secondary text-lg font-semibold tracking-wide drop-shadow-[0_2px_8px_rgba(124,58,237,0.5)]">
                Node Palette
            </h2>
            <div className="flex flex-wrap gap-3">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='test' label='test' />
                <DraggableNode type='conditional' label='Conditional' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='split' label='Split' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='merge' label='Merge' />
            </div>
        </div>
    );
};
