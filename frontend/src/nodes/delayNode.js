import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id, data }) => {
    const [delayTime, setDelayTime] = useState(data?.delay || 1000);
    const [unit, setUnit] = useState(data?.unit || 'ms');

    const handleDelayChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setDelayTime(value);
    };

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    };

    const leftHandles = [
        { id: `${id}-input` }
    ];

    const rightHandles = [
        { id: `${id}-output` }
    ];

    return (
        <BaseNode
            title="⏱️ Delay"
            leftHandles={leftHandles}
            rightHandles={rightHandles}
            width={220}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '13px', color: '#e9d5ff' }}>
                    <span style={{ marginBottom: '6px', fontWeight: '500', letterSpacing: '0.3px' }}>Duration:</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <input
                            type="number"
                            value={delayTime}
                            onChange={handleDelayChange}
                            min="0"
                            className="nodrag"
                            style={{
                                flex: 2,
                                padding: '8px 10px',
                                border: '1px solid rgba(167, 139, 250, 0.3)',
                                borderRadius: '8px',
                                fontSize: '13px',
                                background: 'rgba(0, 0, 0, 0.3)',
                                color: '#fff',
                                outline: 'none',
                                transition: 'all 0.2s ease',
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'rgba(167, 139, 250, 0.8)'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(167, 139, 250, 0.3)'}
                        />
                        <select
                            value={unit}
                            onChange={handleUnitChange}
                            className="nodrag"
                            style={{
                                flex: 1,
                                padding: '8px 4px',
                                border: '1px solid rgba(167, 139, 250, 0.3)',
                                borderRadius: '8px',
                                fontSize: '13px',
                                background: 'rgba(0, 0, 0, 0.3)',
                                color: '#fff',
                                outline: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            <option value="ms" style={{ background: '#2e1065' }}>ms</option>
                            <option value="s" style={{ background: '#2e1065' }}>s</option>
                            <option value="m" style={{ background: '#2e1065' }}>min</option>
                        </select>
                    </div>
                </label>
                <div style={{
                    fontSize: '12px',
                    color: '#c4b5fd',
                    padding: '8px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: '8px',
                    textAlign: 'center',
                    border: '1px solid rgba(167, 139, 250, 0.1)',
                    fontStyle: 'italic',
                }}>
                    Wait for {delayTime} {unit === 'm' ? 'minutes' : unit === 's' ? 'seconds' : 'milliseconds'}
                </div>
            </div>
        </BaseNode>
    );
};
