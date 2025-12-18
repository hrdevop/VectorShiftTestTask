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
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
        }}>
            <button 
                type="button"
                onClick={handleSubmit}
                style={{
                    padding: '12px 32px',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#fff',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
}
