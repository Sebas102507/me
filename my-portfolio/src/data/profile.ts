export const PROFILE = {
  name: 'Juan Sebastián Vargas Torres',
  shortName: 'Juan Vargas',
  initials: 'JSVT',
  title: 'AI Engineer · Data Scientist · Data Engineer',
  affiliation: 'University of Technology Sydney · Faculty of Engineering and IT',
  location: 'Sydney, Australia',
  email: 'jvargas100d@gmail.com',
  linkedin: 'https://www.linkedin.com/in/juan-vargas-t-9b4a15189/',
  github: 'https://github.com/Sebas102507',
  medium: 'https://medium.com/@libros123bmw',
  site: 'https://jsebastianv.com',
  tagline:
    'I\u2019m Juan, a data and AI engineer in Sydney with {years}+ years of experience. I look for the places where value can be added: less cost, less time, better data, better experiences, and fewer tasks that nobody should be doing by hand.',
  abstract: [
    'I build and deploy end-to-end, data-driven systems: from data engineering on petabyte-scale platforms to the training, evaluation and serving of machine learning models. My work spans applied deep learning, retrieval-augmented generation (RAG) and agentic systems, with a recent focus on vision-language models for video understanding and on language models grounded in verifiable sources.',
    'I hold a degree in Systems Engineering from the Pontificia Universidad Javeriana (Bogotá) and am completing a Master of Data Science and Innovation at the University of Technology Sydney, where I lead the engineering of a multi-camera CCTV natural-language querying platform as a capstone with industry partners.',
  ],
  keywords: [
    'Machine Learning',
    'Deep Learning',
    'Vision-Language Models',
    'Retrieval-Augmented Generation',
    'LLM Agents',
    'Data Engineering',
    'MLOps',
    'Apache Airflow',
    'Databricks',
    'PyTorch',
    'FastAPI',
    'Azure · AWS',
  ],
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'C1 (IELTS Academic)' },
  ],
};

export type Skill = { area: string; items: string[] };

export const SKILLS: Skill[] = [
  {
    area: 'Data engineering',
    items: ['Apache Airflow', 'Databricks & Delta Lake', 'Unity Catalog', 'Azure Data Factory / Synapse', 'dbt', 'SQL Server · Oracle · PostgreSQL', 'Spark'],
  },
  {
    area: 'Machine learning & deep learning',
    items: ['PyTorch', 'scikit-learn', 'XGBoost / LightGBM', 'Optuna', 'CNNs, RNNs, autoencoders', 'Reinforcement learning (DQN, PPO)'],
  },
  {
    area: 'Generative AI & agents',
    items: ['LangChain ReAct agents', 'RAG (Qdrant, ChromaDB, OpenSearch)', 'Vision-language models (Qwen3-VL, BLIP)', 'Model Context Protocol (FastMCP)', 'Microsoft Foundry', 'Mixtral / Llama fine-tuning'],
  },
  {
    area: 'Software & MLOps',
    items: ['Python (uv, packaging, pytest)', 'FastAPI', 'Docker & Compose', 'GitHub Actions', 'TypeScript · React · Next.js', 'Streamlit', 'Supabase'],
  },
  {
    area: 'Cloud',
    items: ['AWS (SageMaker, Bedrock, Lambda)', 'Azure (Databricks, AI Search, Foundry)', 'Railway · Render · Cloudflare R2'],
  },
];
