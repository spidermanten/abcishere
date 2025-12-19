
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
        <div className="flex items-center justify-center p-3 bg-gradient-to-br from-primary-purple-dark/20 to-primary-purple/15 backdrop-blur-md ">
            <button
                type="submit"
                onClick={handleSubmit}
                className="px-8 py-2 text-[15px] font-semibold tracking-wide text-white bg-gradient-to-br from-primary-purple to-primary-purple-light border border-primary-purple-light/40 rounded-[10px] cursor-pointer shadow-[0_4px_16px_0_rgba(124,58,237,0.4),inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_24px_0_rgba(124,58,237,0.6),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:from-[#8b5cf6] hover:to-[#c4b5fd] active:scale-95 active:translate-y-0"
            >
                Submit Pipeline
            </button>
        </div>
    );
}
