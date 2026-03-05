import { Skill } from '@/types';

export const skills: Skill[] = [
  /* Agentic AI */
  { id: 'python', name: 'Python', category: 'Agentic AI', level: 'Expert' },
  { id: 'mcp', name: 'Model Context Protocol', category: 'Agentic AI', level: 'Advanced' },
  { id: 'prompt-eng', name: 'Prompt Engineering', category: 'Agentic AI', level: 'Advanced' },
  { id: 'gen-ai', name: 'Generative AI', category: 'Agentic AI', level: 'Advanced' },
  { id: 'claude-api', name: 'Claude API', category: 'Agentic AI', level: 'Advanced' },
  { id: 'rag-systems', name: 'RAG Systems', category: 'Agentic AI', level: 'Intermediate' },

  /* Cybersecurity */
  { id: 'soc-analyst', name: 'SOC Analysis', category: 'Cybersecurity', level: 'Advanced' },
  { id: 'splunk', name: 'Splunk', category: 'Cybersecurity', level: 'Advanced' },
  { id: 'siem', name: 'SIEM Tools', category: 'Cybersecurity', level: 'Advanced' },
  { id: 'threat-hunting', name: 'Threat Hunting', category: 'Cybersecurity', level: 'Intermediate' },
  { id: 'incident-response', name: 'Incident Response', category: 'Cybersecurity', level: 'Intermediate' },
  { id: 'ethical-hacking', name: 'Ethical Hacking', category: 'Cybersecurity', level: 'Intermediate' },

  /* Full-Stack */
  { id: 'typescript', name: 'TypeScript', category: 'Full-Stack', level: 'Expert' },
  { id: 'nextjs', name: 'Next.js', category: 'Full-Stack', level: 'Advanced' },
  { id: 'react', name: 'React', category: 'Full-Stack', level: 'Advanced' },
  { id: 'nodejs', name: 'Node.js', category: 'Full-Stack', level: 'Advanced' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'Full-Stack', level: 'Advanced' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Full-Stack', level: 'Advanced' },
  { id: 'fastapi', name: 'FastAPI', category: 'Full-Stack', level: 'Intermediate' },
  { id: 'docker', name: 'Docker', category: 'Full-Stack', level: 'Intermediate' },
  { id: 'git', name: 'Git & GitHub', category: 'Full-Stack', level: 'Expert' },

  /* Data Science */
  { id: 'machine-learning', name: 'Machine Learning', category: 'Data Science', level: 'Intermediate' },
  { id: 'pandas', name: 'Pandas', category: 'Data Science', level: 'Advanced' },
  { id: 'numpy', name: 'NumPy', category: 'Data Science', level: 'Advanced' },
  { id: 'data-analysis', name: 'Data Analysis', category: 'Data Science', level: 'Advanced' },
  { id: 'jupyter', name: 'Jupyter Notebooks', category: 'Data Science', level: 'Advanced' },
];
