// splitNode.js
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
            <div>
                <label>
                    Delimiter:
                    <input
                        type="text"
                        value={delimiter}
                        onChange={(e) => setDelimiter(e.target.value)}
                        placeholder="Comma"
                    />
                </label>
            </div>
        </BaseNode>
    );
}
