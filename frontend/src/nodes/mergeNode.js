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
            <div className="flex flex-col gap-3">
                <label className="block text-text-secondary text-xs font-medium tracking-wide">
                    Number of Inputs:
                    <input
                        type="number"
                        value={numInputs}
                        onChange={handleInputCountChange}
                        min="2"
                        max="6"
                        className="w-full px-3 py-2 mt-1 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none"
                    />
                </label>

                <label className="block text-text-secondary text-xs font-medium tracking-wide">
                    Merge Strategy:
                    <select
                        value={mergeStrategy}
                        onChange={handleStrategyChange}
                        className="w-full px-3 py-2 mt-1 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none appearance-none cursor-pointer"
                    >
                        <option value="concat">Concatenate</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="sum">Sum (Numbers)</option>
                    </select>
                </label>

                <div className="mt-1 text-[11px] text-text-muted p-2 bg-primary-purple-light/10 rounded border border-primary-purple-light/20 italic">
                    <strong>Active:</strong> {numInputs} inputs → 1 output
                    <br />
                    <strong>Mode:</strong> {mergeStrategy}
                </div>
            </div>
        </BaseNode>
    );
};
