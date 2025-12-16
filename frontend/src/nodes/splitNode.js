
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const SplitNode = ({ id, data }) => {
    const [delimiter, setDelimiter] = useState(data?.delimiter || ',');

    return (
        <BaseNode
            title="Split"
            leftHandles={[{ id: `${id}-input` }]}
            rightHandles={[
                { id: `${id}-output1` },
                { id: `${id}-output2` },
                { id: `${id}-output3` }
            ]}
        >
            <div className="flex flex-col gap-3">
                <label className="block text-text-secondary text-xs font-medium tracking-wide">
                    Delimiter:
                    <input
                        type="text"
                        value={delimiter}
                        onChange={(e) => setDelimiter(e.target.value)}
                        placeholder="Comma"
                        className="w-full px-3 py-2 mt-1 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none"
                    />
                </label>
            </div>
        </BaseNode>
    );
}
