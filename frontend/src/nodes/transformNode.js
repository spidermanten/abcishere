
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
            <div className="flex flex-col gap-3">
                <label className="block text-text-secondary text-xs font-medium tracking-wide">
                    Operation:
                    <select
                        value={operation}
                        onChange={(e) => setOperation(e.target.value)}
                        className="w-full px-3 py-2 mt-1 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none appearance-none cursor-pointer"
                    >
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
