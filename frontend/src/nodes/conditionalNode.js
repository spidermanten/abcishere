// conditionalNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionalNode = ({ id, data }) => {
    const [condition, setCondition] = useState(data?.condition || 'greater');
    const [threshold, setThreshold] = useState(data?.threshold || '0');

    return (
        <BaseNode
            title="Conditional"
            leftHandles={[{ id: `${id}-input` }]}
            rightHandles={[
                { id: `${id}-true` },
                { id: `${id}-false` }
            ]}
            width={240}
        >
            <div>
                <label>
                    Condition:
                    <select value={condition} onChange={(e) => setCondition(e.target.value)}>
                        <option value="greater">Greater Than</option>
                        <option value="less">Less Than</option>
                        <option value="equal">Equal To</option>
                    </select>
                </label>
                <label>
                    Threshold:
                    <input
                        type="number"
                        value={threshold}
                        onChange={(e) => setThreshold(e.target.value)}
                    />
                </label>
            </div>
        </BaseNode>
    );
}
