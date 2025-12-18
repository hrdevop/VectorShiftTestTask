// submit.js

import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
    const selector = (state) => ({
        nodes: state.nodes,
        edges: state.edges,
    });

    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        try {
            const pipeline = {
                nodes: nodes,
                edges: edges
            };

            const formData = new FormData();
            formData.append('pipeline', JSON.stringify(pipeline));

            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to parse pipeline');
            }

            const result = await response.json();

            // Display alert with results
            const message = `Pipeline Analysis Results:\n\n` +
                `Number of Nodes: ${result.num_nodes}\n` +
                `Number of Edges: ${result.num_edges}\n` +
                `Is DAG: ${result.is_dag ? 'Yes ✓' : 'No ✗'}`;

            alert(message);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Error submitting pipeline. Please make sure the backend is running on http://localhost:8000');
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: '30px',
            right: '30px',
            zIndex: 1000,
        }}>
            <button
                type="button"
                onClick={handleSubmit}
                style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    background: '#7c3aed', // Purple to match dashboard
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.3)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(79, 70, 229, 0.6)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.4)';
                }}
            >
                <span role="img" aria-label="play" style={{ fontSize: '18px' }}>🚀</span>
                <span>Run Pipeline</span>
            </button>
        </div>
    );
}
