import { BaseNode } from "./BaseNode";
import { useState } from "react";

export const TestNode = ({ id, data }) => {

    const [count, setCount] = useState(0);
    return (
        <BaseNode title="Test Node" width={200} height={100} leftHandles={data.left || [{ id: "left" }]} rightHandles={data.right || [{ id: "right" }]}>
            <div>Count: {count}</div>
            <label>
                <input type="text" />
            </label>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </BaseNode>
    )
}
