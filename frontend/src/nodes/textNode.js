import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [nodeWidth, setNodeWidth] = useState(200);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };


  useEffect(() => {
    if (textareaRef.current) {

      textareaRef.current.style.height = 'auto';

      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;


      const textLength = currText.length;
      const calculatedWidth = Math.max(150, Math.min(500, 150 + textLength * 2));
      setNodeWidth(calculatedWidth);
    }
  }, [currText]);

  const extractVariables = (text) => {
    const regex = /\{\{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\}/g;
    const vars = new Set();
    let match;

    while ((match = regex.exec(text)) !== null) {
      vars.add(match[1]);
    }

    return Array.from(vars);
  };

  const variables = extractVariables(currText);

  const leftHandles = variables.map((v) => ({
    id: `${id}-${v}`,
  }));

  return (
    <BaseNode
      title="Text"
      leftHandles={leftHandles}
      rightHandles={[{ id: `${id}-output` }]}
      width={nodeWidth}
    >
      <div>
        <label style={{ display: 'block', width: '100%' }}>
          Text:
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={handleTextChange}
            style={{
              width: '100%',
              minHeight: '40px',
              resize: 'none',
              overflow: 'hidden',
            }}
            rows={1}
          />
        </label>
      </div>
    </BaseNode>
  );
};
