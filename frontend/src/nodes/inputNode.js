

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="relative w-[200px] md:w-[220px] min-h-auto p-3 md:p-4 rounded-xl border border-primary-purple-light/30 bg-gradient-to-br from-primary-purple-dark/40 to-primary-purple/30 backdrop-blur-md shadow-[0_8px_32px_0_rgba(124,58,237,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_0_rgba(124,58,237,0.4),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-primary-purple-light/50 group">
      <div className="font-semibold mb-3 text-center text-xs md:text-sm tracking-wide text-text-secondary drop-shadow-[0_2px_8px_rgba(124,58,237,0.5)]">
        <span>Input</span>
      </div>
      <div className="flex flex-col gap-3">
        <label className="block text-text-secondary text-xs font-medium tracking-wide">
          Name:
          <input
            type="text"
            className="w-full px-3 py-2 mt-1 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none"
            value={currName}
            onChange={handleNameChange}
          />
        </label>
        <label className="block text-text-secondary text-xs font-medium tracking-wide">
          Type:
          <select
            value={inputType}
            onChange={handleTypeChange}
            className="w-full px-3 py-2 mt-1 bg-black/30 border border-primary-purple-light/30 rounded-lg text-text-primary text-[13px] focus:border-primary-purple-light focus:bg-black/50 focus:ring-2 focus:ring-primary-purple/20 transition-all outline-none appearance-none cursor-pointer"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        className="!w-3 !h-3 !bg-gradient-to-br !from-primary-purple !to-primary-purple-light !border-2 !border-primary-purple-light/50 shadow-[0_0_10px_rgba(124,58,237,0.6)] transition-all duration-200 hover:!bg-gradient-to-br hover:!from-[#8b5cf6] hover:!to-text-muted hover:shadow-[0_0_15px_rgba(124,58,237,0.8)]"
      />
    </div>
  );
}
