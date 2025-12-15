// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
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
      <Handle
        type="target"
        position={Position.Left}
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
      <div style={{
        fontWeight: 600,
        marginBottom: 12,
        textAlign: 'center',
        fontSize: '14px',
        letterSpacing: '0.5px',
        color: '#e9d5ff',
        textShadow: '0 2px 8px rgba(124, 58, 237, 0.5)',
      }}>
        <span>Output</span>
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
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
