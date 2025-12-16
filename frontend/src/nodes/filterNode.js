
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
            <div className="flex flex-col gap-3">
                <label className="block text-text-secondary text-xs font-medium tracking-wide">
                    Type:
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="w-full px-3 py-2 mt-1 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none appearance-none cursor-pointer"
                    >
                        <option value="contains">Contains</option>
                        <option value="equals">Equals</option>
                        <option value="startsWith">Starts With</option>
                    </select>
                </label>
                <label className="block text-text-secondary text-xs font-medium tracking-wide">
                    Value:
                    <input
                        type="text"
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        className="w-full px-3 py-2 mt-1 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none"
                    />
                </label>
            </div>
        </BaseNode>
    );
}
