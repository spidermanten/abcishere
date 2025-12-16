
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
            <div className="flex flex-col gap-3">
                <label className="block text-text-secondary text-xs font-medium tracking-wide">
                    Condition:
                    <select
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        className="w-full px-3 py-2 mt-1 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none appearance-none cursor-pointer"
                    >
                        <option value="greater">Greater Than</option>
                        <option value="less">Less Than</option>
                        <option value="equal">Equal To</option>
                    </select>
                </label>
                <label className="block text-text-secondary text-xs font-medium tracking-wide">
                    Threshold:
                    <input
                        type="number"
                        value={threshold}
                        onChange={(e) => setThreshold(e.target.value)}
                        className="w-full px-3 py-2 mt-1 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none"
                    />
                </label>
            </div>
        </BaseNode>
    );
}
