// filterNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
    const [filterType, setFilterType] = useState(data?.filterType || 'contains');
    const [filterValue, setFilterValue] = useState(data?.filterValue || '');

    return (
        <BaseNode
            title="Filter"
            leftHandles={[{ id: `${id}-input` }]}
            rightHandles={[{ id: `${id}-output` }]}
        >
            <div>
                <label>
                    Type:
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                        <option value="contains">Contains</option>
                        <option value="equals">Equals</option>
                        <option value="startsWith">Starts With</option>
                    </select>
                </label>
                <label>
                    Value:
                    <input
                        type="text"
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                    />
                </label>
            </div>
        </BaseNode>
    );
}
