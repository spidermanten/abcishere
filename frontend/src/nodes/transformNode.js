// transformNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
    const [operation, setOperation] = useState(data?.operation || 'uppercase');

    return (
        <BaseNode
            title="Transform"
            leftHandles={[{ id: `${id}-input` }]}
            rightHandles={[{ id: `${id}-output` }]}
            width={220}
        >
            <div>
                <label>
                    Operation:
                    <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                        <option value="uppercase">Uppercase</option>
                        <option value="lowercase">Lowercase</option>
                        <option value="reverse">Reverse</option>
                        <option value="trim">Trim</option>
                    </select>
                </label>
            </div>
        </BaseNode>
    );
}
