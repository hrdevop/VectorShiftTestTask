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
        <div style={{ 
            padding: '24px 28px', 
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.98) 100%)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)',
            borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
            }}>
                <div style={{
                    width: '4px',
                    height: '32px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '2px'
                }} />
                <h2 style={{ 
                    margin: 0, 
                    color: '#1e293b',
                    fontSize: '22px',
                    fontWeight: '700',
                    letterSpacing: '-0.5px'
                }}>
                    Node Palette
                </h2>
                <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'linear-gradient(90deg, rgba(226, 232, 240, 0.8) 0%, transparent 100%)',
                    marginLeft: '12px'
                }} />
            </div>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '14px',
                alignItems: 'center'
            }}>
                <DraggableNode 
                    type='customInput' 
                    label='Input' 
                    icon={<FiArrowDownCircle />}
                />
                <DraggableNode 
                    type='llm' 
                    label='LLM' 
                    icon={<FiCpu />}
                />
                <DraggableNode 
                    type='customOutput' 
                    label='Output' 
                    icon={<FiArrowUpCircle />}
                />
                <DraggableNode 
                    type='text' 
                    label='Text' 
                    icon={<FiType />}
                />
                <DraggableNode 
                    type='condition' 
                    label='Condition' 
                    icon={<FiGitBranch />}
                />
                <DraggableNode 
                    type='transform' 
                    label='Transform' 
                    icon={<FiRefreshCw />}
                />
                <DraggableNode 
                    type='filter' 
                    label='Filter' 
                    icon={<FiFilter />}
                />
                <DraggableNode 
                    type='merge' 
                    label='Merge' 
                    icon={<FiGitMerge />}
                />
                <DraggableNode 
                    type='split' 
                    label='Split' 
                    icon={<FiShare2 />}
                />
            </div>
        </div>
    );
};
