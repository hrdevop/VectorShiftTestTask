// toolbar.js

import { DraggableNode } from './draggableNode';
import {
    FiArrowDownCircle,
    FiCpu,
    FiArrowUpCircle,
    FiType,
    FiGitBranch,
    FiRefreshCw,
    FiFilter,
    FiGitMerge,
    FiShare2
} from 'react-icons/fi';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '10px' }}>

            {/* Search and Tabs Row */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                padding: '0 20px',
                marginBottom: '20px'
            }}>
                {/* Search Bar */}
                <div style={{
                    position: 'relative',
                    width: '320px'
                }}>
                    <input
                        type="text"
                        placeholder="Search Nodes"
                        style={{
                            width: '100%',
                            padding: '8px 12px 8px 36px',
                            borderRadius: '8px',
                            border: '1px solid #E5E7EB',
                            fontSize: '14px',
                            color: '#374151',
                            outline: 'none',
                            background: '#F9FAFB',
                            boxSizing: 'border-box'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#9CA3AF'
                    }}>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '20px' }}>
                    {['Start', 'Objects', 'Knowledge', 'AI', 'Integrations', 'Logic', 'Data', 'Chat'].map((tab, i) => (
                        <div key={tab} style={{
                            fontSize: '14px',
                            fontWeight: '500',
                            color: i === 0 ? '#7C3AED' : '#4B5563', // First tab active purple
                            cursor: 'pointer',
                            borderBottom: i === 0 ? '2px solid #7C3AED' : 'none',
                            paddingBottom: '2px'
                        }}>
                            {tab}
                        </div>
                    ))}
                </div>
            </div>

            {/* Component Palette styled as clean cards */}
            <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                padding: '0 20px',
                marginBottom: '20px'
            }}>
                {[
                    { type: 'customInput', label: 'Input', icon: <FiArrowDownCircle /> },
                    { type: 'llm', label: 'LLM', icon: <FiCpu /> },
                    { type: 'customOutput', label: 'Output', icon: <FiArrowUpCircle /> },
                    { type: 'text', label: 'Text', icon: <FiType /> },
                    { type: 'condition', label: 'Condition', icon: <FiGitBranch /> },
                    { type: 'transform', label: 'Transform', icon: <FiRefreshCw /> },
                    { type: 'filter', label: 'Filter', icon: <FiFilter /> },
                    { type: 'merge', label: 'Merge', icon: <FiGitMerge /> },
                    { type: 'split', label: 'Split', icon: <FiShare2 /> }
                ].map(node => (
                    <div key={node.type} style={{ transform: 'scale(0.9)' }}>
                        <DraggableNode
                            type={node.type}
                            label={node.label}
                            icon={node.icon}
                        />
                    </div>
                ))}
            </div>
        </div >
    );
};
