
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            alert(
                `Pipeline Analysis Results:\n` +
                `------------------------\n` +
                `Number of Nodes: ${data.num_nodes}\n` +
                `Number of Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag}`
            );
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Failed to submit pipeline. Please check if the backend is running.');
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.2) 0%, rgba(109, 40, 217, 0.15) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(167, 139, 250, 0.2)',
        }}>
            <button
                type="submit"
                onClick={handleSubmit}
                style={{
                    padding: '12px 32px',
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
                    border: '1px solid rgba(167, 139, 250, 0.4)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px 0 rgba(124, 58, 237, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 24px 0 rgba(124, 58, 237, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #c4b5fd 100%)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 16px 0 rgba(124, 58, 237, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)';
                }}
                onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
                }}
                onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
}
