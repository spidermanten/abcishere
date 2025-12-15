

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.2) 0%, rgba(109, 40, 217, 0.15) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(167, 139, 250, 0.2)',
            boxShadow: '0 4px 16px 0 rgba(124, 58, 237, 0.1)',
        }}>
            <h2 style={{
                margin: '0 0 16px 0',
                color: '#e9d5ff',
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textShadow: '0 2px 8px rgba(124, 58, 237, 0.5)',
            }}>
                Node Palette
            </h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
            }}>
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
