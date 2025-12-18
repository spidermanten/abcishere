
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
            style={{ width, minHeight: height }}
            className="base-node relative p-3 md:p-4 rounded-xl border border-primary-purple-light/30 bg-gradient-to-br from-primary-purple-dark/40 to-primary-purple/30 backdrop-blur-md shadow-[0_8px_32px_0_rgba(124,58,237,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_0_rgba(124,58,237,0.4),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-primary-purple-light/50 group"
        >
            <div className="font-semibold mb-3 text-center text-xs md:text-sm tracking-wide text-text-secondary drop-shadow-[0_2px_8px_rgba(124,58,237,0.5)]">
                {title}
            </div>

            <div className="text-[13px] text-text-primary">
                {children}
            </div>

            {leftHandles.map((handle, index) => (
                <Handle
                    key={handle.id}
                    type="target"
                    position={Position.Left}
                    id={handle.id}
                    className="!w-3 !h-3 !bg-gradient-to-br !from-primary-purple !to-primary-purple-light !border-2 !border-primary-purple-light/50 shadow-[0_0_10px_rgba(124,58,237,0.6)] transition-all duration-200 hover:!bg-gradient-to-br hover:!from-[#8b5cf6] hover:!to-text-muted hover:shadow-[0_0_15px_rgba(124,58,237,0.8)]"
                    style={{
                        top: 40 + index * 20,
                    }}
                />
            ))}

            {rightHandles.map((handle, index) => (
                <Handle
                    key={handle.id}
                    type="source"
                    position={Position.Right}
                    id={handle.id}
                    className="!w-3 !h-3 !bg-gradient-to-br !from-primary-purple !to-primary-purple-light !border-2 !border-primary-purple-light/50 shadow-[0_0_10px_rgba(124,58,237,0.6)] transition-all duration-200 hover:!bg-gradient-to-br hover:!from-[#8b5cf6] hover:!to-text-muted hover:shadow-[0_0_15px_rgba(124,58,237,0.8)]"
                    style={{
                        top: 40 + index * 20,
                    }}
                />
            ))}
        </div>
    );
};
