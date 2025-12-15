// inputNode.js

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
    <div style={{
      width: 220,
      minHeight: 'auto',
      border: '1px solid rgba(167, 139, 250, 0.3)',
      borderRadius: 12,
      padding: 16,
      background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.4) 0%, rgba(109, 40, 217, 0.3) 100%)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px 0 rgba(124, 58, 237, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      position: 'relative',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      color: '#ffffff',
    }}>
      <div style={{
        fontWeight: 600,
        marginBottom: 12,
        textAlign: 'center',
        fontSize: '14px',
        letterSpacing: '0.5px',
        color: '#e9d5ff',
        textShadow: '0 2px 8px rgba(124, 58, 237, 0.5)',
      }}>
        <span>Input</span>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        style={{
          width: 12,
          height: 12,
          background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
          border: '2px solid rgba(167, 139, 250, 0.5)',
          boxShadow: '0 0 10px rgba(124, 58, 237, 0.6)',
          transition: 'all 0.2s ease',
        }}
      />
    </div>
  );
}
