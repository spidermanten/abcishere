import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => {
    const [numInputs, setNumInputs] = useState(data?.numInputs || 2);
    const [mergeStrategy, setMergeStrategy] = useState(data?.strategy || 'concat');

    const handleInputCountChange = (e) => {
        const value = parseInt(e.target.value) || 2;
        setNumInputs(Math.min(Math.max(value, 2), 6));
    };

    const handleStrategyChange = (e) => {
        setMergeStrategy(e.target.value);
    };


    const leftHandles = Array.from({ length: numInputs }, (_, i) => ({
        id: `${id}-input-${i + 1}`
    }));

    const rightHandles = [
        { id: `${id}-output` }
    ];

    return (
        <BaseNode
            title="🔀 Merge"
            leftHandles={leftHandles}
            rightHandles={rightHandles}
            width={240}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
                    <span style={{ marginBottom: '4px', fontWeight: '500' }}>Number of Inputs:</span>
                    <input
                        type="number"
                        value={numInputs}
                        onChange={handleInputCountChange}
                        min="2"
                        max="6"
                        style={{
                            padding: '6px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '13px',
                        }}
                    />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
                    <span style={{ marginBottom: '4px', fontWeight: '500' }}>Merge Strategy:</span>
                    <select
                        value={mergeStrategy}
                        onChange={handleStrategyChange}
                        style={{
                            padding: '6px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '13px',
                            background: 'white',
                        }}
                    >
                        <option value="concat">Concatenate</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="sum">Sum (Numbers)</option>
                    </select>
                </label>

                <div style={{
                    fontSize: '11px',
                    color: '#666',
                    padding: '6px',
                    background: '#f0f8ff',
                    borderRadius: '3px',
                    border: '1px solid #d0e8ff'
                }}>
                    <strong>Active:</strong> {numInputs} inputs → 1 output
                    <br />
                    <strong>Mode:</strong> {mergeStrategy}
                </div>
            </div>
        </BaseNode>
    );
};
