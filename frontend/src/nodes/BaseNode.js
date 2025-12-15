// BaseNode.js
import { Handle, Position } from 'reactflow';

export const BaseNode = ({
    title,
    children,
    leftHandles = [],
    rightHandles = [],
    width = 220,
    height = 'auto',
}) => {
    return (
        <div
            style={{
                width,
                minHeight: height,
                border: '1px solid rgba(167, 139, 250, 0.3)',
                borderRadius: 12,
                padding: 16,
                background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.4) 0%, rgba(109, 40, 217, 0.3) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px 0 rgba(124, 58, 237, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                color: '#ffffff',
            }}
            className="base-node"
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(124, 58, 237, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.5)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(124, 58, 237, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.3)';
            }}
        >
            {/* Node Title */}
            <div
                style={{
                    fontWeight: 600,
                    marginBottom: 12,
                    textAlign: 'center',
                    fontSize: '14px',
                    letterSpacing: '0.5px',
                    color: '#e9d5ff',
                    textShadow: '0 2px 8px rgba(124, 58, 237, 0.5)',
                }}
            >
                {title}
            </div>

            {/* Node Content */}
            <div style={{
                fontSize: '13px',
                color: '#ffffff',
            }}>
                {children}
            </div>

            {/* Left Handles (Inputs) */}
            {leftHandles.map((handle, index) => (
                <Handle
                    key={handle.id}
                    type="target"
                    position={Position.Left}
                    id={handle.id}
                    style={{
                        top: 40 + index * 20,
                        width: 12,
                        height: 12,
                        background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
                        border: '2px solid rgba(167, 139, 250, 0.5)',
                        boxShadow: '0 0 10px rgba(124, 58, 237, 0.6)',
                        transition: 'all 0.2s ease',
                    }}
                />
            ))}

            {/* Right Handles (Outputs) */}
            {rightHandles.map((handle, index) => (
                <Handle
                    key={handle.id}
                    type="source"
                    position={Position.Right}
                    id={handle.id}
                    style={{
                        top: 40 + index * 20,
                        width: 12,
                        height: 12,
                        background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
                        border: '2px solid rgba(167, 139, 250, 0.5)',
                        boxShadow: '0 0 10px rgba(124, 58, 237, 0.6)',
                        transition: 'all 0.2s ease',
                    }}
                />
            ))}
        </div>
    );
};
