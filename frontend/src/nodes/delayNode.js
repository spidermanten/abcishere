import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id, data }) => {
    const [delayTime, setDelayTime] = useState(data?.delay || 1000);
    const [unit, setUnit] = useState(data?.unit || 'ms');

    const handleDelayChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setDelayTime(value);
    };

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    };

    const leftHandles = [
        { id: `${id}-input` }
    ];

    const rightHandles = [
        { id: `${id}-output` }
    ];

    return (
        <BaseNode
            title="⏱️ Delay"
            leftHandles={leftHandles}
            rightHandles={rightHandles}
            width={280}
        >
            <div className="flex flex-col gap-3">
                <label className="block text-text-secondary text-xs font-medium tracking-wide">
                    Duration:
                    <div className="flex gap-2 mt-1">
                        <input
                            type="number"
                            value={delayTime}
                            onChange={handleDelayChange}
                            min="0"
                            className="nodrag flex-[2] px-3 py-2 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none"
                        />
                        <select
                            value={unit}
                            onChange={handleUnitChange}
                            className="nodrag flex-1 px-3 py-2 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none appearance-none cursor-pointer"
                        >
                            <option value="ms" className="bg-primary-purple-dark text-white">ms</option>
                            <option value="s" className="bg-primary-purple-dark text-white">s</option>
                            <option value="m" className="bg-primary-purple-dark text-white">min</option>
                        </select>
                    </div>
                </label>
                <div className="mt-1 text-[11px] text-text-muted p-2 bg-primary-purple-light/10 rounded border border-primary-purple-light/20 italic text-center">
                    Wait for {delayTime} {unit === 'm' ? 'minutes' : unit === 's' ? 'seconds' : 'milliseconds'}
                </div>
            </div>
        </BaseNode>
    );
};
