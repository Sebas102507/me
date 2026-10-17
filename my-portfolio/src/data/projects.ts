export type ProjectLink = { label: string; url: string; kind?: 'repo' | 'live' | 'doc' | 'package' | 'org' };

export type Project = {
  id: string;
  title: string;
  venue: string;
  year: string;
  summary: string;
  contributions?: string[];
  stack: string[];
  links: ProjectLink[];
  components?: { name: string; description: string; url: string }[];
};

export type ProjectGroup = { heading: string; blurb?: string; items: Project[] };

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    heading: 'Research and capstone systems',
    blurb: 'Multi-repository systems built with teams and industry partners. Each repository is documented with architecture notes, setup instructions and evaluation results.',
    items: [
      {
        id: 'cctv',
        title: 'Interactive Surveillance Video Querying',
        venue: 'UTS iLab Capstone, Project 08 · organisation uts-ilab-p08',
        year: '2026',
        summary:
          'Natural-language search over multi-camera CCTV footage. Long, mostly uneventful video is reduced to structured event annotations by a vision-language pipeline; the annotations are indexed for retrieval-augmented question answering and surfaced to investigators through a desktop interface.',
        contributions: [
          'VideoMeta: a three-stage pipeline (Qwen3-VL window significance filter, YOLO26 + ByteTrack spatial tracking, VLM event annotator) released as a Python package.',
          'RAG layer over the MEVA event annotations with Qdrant vector search and an in-process answer_query interface consumed by the backend.',
          'FastAPI query service with Supabase authentication and a Next.js 15 investigator UI (Horus Assistant) with grid and timeline review.',
          'Pre-study evaluating BLIP captioning on real surveillance frames; the negative result motivated the VLM-based design.',
        ],
        stack: ['PyTorch', 'Qwen3-VL', 'YOLO', 'Qdrant', 'FastAPI', 'Supabase', 'Next.js', 'Cloudflare R2'],
        links: [
          { label: 'Organisation', url: 'https://github.com/uts-ilab-p08', kind: 'org' },
          { label: 'Live application', url: 'https://cctvai.site', kind: 'live' },
        ],
        components: [
          { name: 'videometa', description: 'Video to structured event annotations; published on TestPyPI.', url: 'https://github.com/uts-ilab-p08/videometa' },
          { name: 'video-annotation-pipeline', description: 'Notebooks that pull MEVA clips, run detection and a local VLM, and load the bronze schema.', url: 'https://github.com/uts-ilab-p08/video-annotation-pipeline' },
          { name: 'iLabs-capstone-rag', description: 'Vector index and natural-language retrieval over event annotations.', url: 'https://github.com/uts-ilab-p08/iLabs-capstone-rag' },
          { name: 'surveillance-backend', description: 'FastAPI search relay, clip, camera and query-history API.', url: 'https://github.com/uts-ilab-p08/surveillance-backend' },
          { name: 'cctv-query-frontend', description: 'Horus Assistant, the investigator-facing interface.', url: 'https://github.com/uts-ilab-p08/cctv-query-frontend' },
          { name: 'blip-captioning-poc', description: 'Evaluation of BLIP captioning for CCTV search, with full report.', url: 'https://github.com/uts-ilab-p08/blip-captioning-poc' },
        ],
      },
      {
        id: 'finsight',
        title: 'FinSightAI: Agentic Financial Insights Platform',
        venue: 'UTS NLP Group · organisation UtsNlpGroup',
        year: '2026',
        summary:
          'Full-stack, containerised platform for natural-language financial analysis. A LangChain ReAct agent served by FastAPI calls six financial tools exposed through a FastMCP server and answers with retrieval-augmented generation over SEC 10-K filings and financial news stored in ChromaDB. The repository documents the architecture, the RAG ingestion pipeline, an API reference, RAG evaluation results and the test suite.',
        stack: ['LangChain', 'FastMCP', 'ChromaDB', 'FastAPI', 'React 19', 'Tailwind CSS v4', 'Docker Compose'],
        links: [
          { label: 'Repository', url: 'https://github.com/UtsNlpGroup/FinSightAI', kind: 'repo' },
          { label: 'Project site', url: 'https://utsnlpgroup.github.io/FinSightAI/', kind: 'live' },
        ],
      },
      {
        id: 'brainy',
        title: 'Brainy Noise: Noise Classification in Brain MRI Scans',
        venue: 'Undergraduate thesis with honourable mention, Pontificia Universidad Javeriana · organisation Proyecto-de-Grado-Brainy-Noise',
        year: '2023',
        summary:
          'Web-based diagnostic tool for radiologists: upload a brain MRI scan and get an instant quality assessment from a CNN that classifies noise levels. Delivered as microservices (model service, API gateway, user management, query results) with an Angular front end, Docker Compose orchestration and notebooks for data preparation, training and evaluation.',
        stack: ['TensorFlow / Keras', 'CNN', 'Flask', 'Java (Spring)', 'Angular', 'Docker Compose'],
        links: [{ label: 'Organisation', url: 'https://github.com/Proyecto-de-Grado-Brainy-Noise', kind: 'org' }],
      },

    ],
  },
  {
    heading: 'Applied machine learning and language models',
    items: [
      {
        id: 'arrivo',
        title: 'Arrivo: A Grounded Settlement-Planning Reasoning Agent',
        venue: 'Microsoft Agents League 2026, Reasoning Agents track',
        year: '2026',
        summary:
          'A reasoning agent that plans a new migrant’s first sixty days in Australia. It classifies the visa, grounds entitlements in a knowledge base of official government documents (Azure AI Search on Microsoft Foundry), matches affordable suburbs, topologically sorts the settlement dependency graph and verifies each step. Every claim carries a citation; when evidence is insufficient the agent abstains rather than guessing.',
        stack: ['Microsoft Foundry', 'Azure AI Search', 'Python', 'Agentic reasoning'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/Arrivo_Microsoft_AI_Hackathon', kind: 'repo' }],
      },
      {
        id: 'weather',
        title: 'Weather Intelligence: Forecasting Service for Sydney',
        venue: 'UTS 36120 Advanced Machine Learning Application',
        year: '2026',
        summary:
          'FastAPI service that serves two models trained on the Open-Meteo historical archive: a regression model for a Climate Comfort Index at one-, two- and three-day horizons and a multiclass Weather Hazard Category at seven days. Experiments follow the Cookiecutter Data Science layout and use walk-forward cross-validation through the nucleus-ml package. Deployed on Render with Docker.',
        stack: ['scikit-learn', 'Optuna', 'FastAPI', 'Docker', 'uv', 'Render'],
        links: [
          { label: 'Live API documentation', url: 'https://three6120-26sp-at2-25945320-api.onrender.com/docs', kind: 'live' },
          { label: 'nucleus-ml on TestPyPI', url: 'https://test.pypi.org/project/nucleus-ml/', kind: 'package' },
        ],
      },
      {
        id: 'parliament',
        title: 'Text Mining of Parliamentary Inquiry Submissions',
        venue: 'UTS Natural Language Processing',
        year: '2026',
        summary:
          'End-to-end NLP analysis of 295 public submissions to the Australian inquiry into the conduct of the 2025 federal election. PDF submissions are parsed, cleaned and analysed with topic modelling, keyword extraction and sentiment analysis to produce aggregate, theme-level evidence for policy discussion.',
        stack: ['Python', 'spaCy / NLTK', 'Topic modelling', 'Jupyter'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/nlp-parliamentary-inquiry-text-mining', kind: 'repo' }],
      },
      {
        id: 'medical',
        title: 'AI Agent for Querying Patient Medical Histories',
        venue: 'Technical challenge, AWS',
        year: '2024',
        summary:
          'Serverless RAG architecture on AWS: Mixtral 8x7B on a SageMaker endpoint for inference, a GPT-J 6B embedding model with OpenSearch as vector store, Lambda functions for file upload and document agents, and a WebSocket API for streaming answers to the client. The design and an alternative using Vectara are documented in the repository and in a companion Medium article.',
        stack: ['AWS SageMaker', 'OpenSearch', 'Lambda', 'LangChain', 'Mixtral 8x7B'],
        links: [
          { label: 'Repository', url: 'https://github.com/Sebas102507/ai_medical_history_agent', kind: 'repo' },
          { label: 'Article', url: 'https://medium.com/@libros123bmw/ai-system-to-handle-and-query-patients-medical-history-using-mixtral-8x7b-langchain-and-aws-e4615381e222', kind: 'doc' },
        ],
      },
      {
        id: 'bullets',
        title: 'Bullets Over Hugs: The Cost of the Global Arms Race',
        venue: 'UTS Data Visualisation · organisation Data-Visualization-Bullets-Over-Hugs',
        year: '2026',
        summary:
          'Interactive multi-page Streamlit dashboard quantifying military spending, the human cost of conflict and the scale of nuclear arsenals, including an opportunity-cost re-allocation tool and a localised impact simulator.',
        stack: ['Streamlit', 'Plotly', 'pandas'],
        links: [{ label: 'Repository', url: 'https://github.com/Data-Visualization-Bullets-Over-Hugs/Bullets-Over-Hugs', kind: 'repo' }],
      },
    ],
  },
  {
    heading: 'Data engineering',
    items: [
      {
        id: 'vic-etl',
        title: 'Research Vice-Rectory ETL on Apache Airflow',
        venue: 'Pontificia Universidad Javeriana · organisation VicerrectoriaInvestigacion',
        year: '2023',
        summary:
          'Production Airflow DAG consolidating the university’s research data: contracts, validated scientific output, faculty core data, projects, the institutional repository, journals and research seed groups, with connectors for Oracle, Scopus and Web of Science. Documented in Spanish with the DAG graph, run instructions and conventions for adding operators.',
        stack: ['Apache Airflow', 'Docker Compose', 'pandas', 'Oracle', 'Scopus / WoS APIs'],
        links: [{ label: 'Repository', url: 'https://github.com/VicerrectoriaInvestigacion/Vic_ETL_airflow', kind: 'repo' }],
      },
    ],
  },
  {
    heading: 'Deep learning studies',
    blurb: 'Smaller, self-contained experiments with a documented workflow and reproducible notebooks.',
    items: [
      {
        id: 'food101',
        title: 'Transfer Learning and Fine-Tuning on Food-101',
        venue: 'UTS Deep Learning',
        year: '2026',
        summary:
          'Comparison of frozen-backbone GoogLeNet, MobileNetV3 and ResNet-50 classifiers, followed by controlled fine-tuning experiments that progressively unfreeze deeper layers. Seeds are fixed and the notebooks run both locally and on Colab.',
        stack: ['PyTorch', 'torchvision', 'pytorch-ignite'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/CNN_Food101', kind: 'repo' }],
      },
      {
        id: 'kmnist',
        title: 'Handwritten Hiragana Classification (Kuzushiji-MNIST)',
        venue: 'UTS Deep Learning',
        year: '2026',
        summary: 'Neural network in PyTorch trained on 70,000 images of ten Hiragana classes, with learning curves and confusion-matrix evaluation.',
        stack: ['PyTorch', 'NumPy'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/japanese_characters_classifier', kind: 'repo' }],
      },
      {
        id: 'xray',
        title: 'Denoising Autoencoders for Chest X-Rays',
        venue: 'Independent study',
        year: '2023',
        summary: 'Convolutional autoencoder that removes Gaussian noise from chest radiographs, with a web application and model backend to visualise reconstructions.',
        stack: ['TensorFlow / Keras', 'Autoencoders'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/chest_xray_autoencoders_denoising', kind: 'repo' }],
      },
      {
        id: 'rubik',
        title: 'Solving the Rubik’s Cube with Deep Q-Networks',
        venue: 'Independent study',
        year: '2023',
        summary: 'Reinforcement learning agent trained with a DQN to solve scrambled cubes.',
        stack: ['Reinforcement learning', 'DQN'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/RubikCubeDQN', kind: 'repo' }],
      },
      {
        id: 'carvi',
        title: 'CarVi: Vehicle Recognition from a Single Photo',
        venue: 'Independent study',
        year: '2023',
        summary: 'Computer vision mobile app that identifies a vehicle and extracts its information from one photo. A lightweight MobileNetV2 detection model runs on device through TensorFlow Lite for real-time analysis, with a Python backend for the heavier ResNet-50 path.',
        stack: ['Flutter', 'TensorFlow Lite', 'MobileNetV2', 'ResNet-50', 'Python'],
        links: [
          { label: 'Mobile app', url: 'https://github.com/Sebas102507/carvi_app', kind: 'repo' },
          { label: 'Model backend', url: 'https://github.com/Sebas102507/Carvi_Deep_Learning_Mobile_App', kind: 'repo' },
        ],
      },
      {
        id: 'meteonet',
        title: 'MeteoNet: Temperature and Precipitation Forecasting with LSTMs',
        venue: 'Independent study',
        year: '2023',
        summary: 'Predictive forecasting model that projects temperature and precipitation with LSTM networks, capturing temporal dependencies from preprocessed time-series data.',
        stack: ['LSTM', 'TensorFlow / Keras', 'Time series'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/MeteoNetForecasting', kind: 'repo' }],
      },
      {
        id: 'music',
        title: 'Music Genre Classifier',
        venue: 'Independent study',
        year: '2023',
        summary: 'Audio analysis application that extracts MFCC features from 30-second clips and feeds them to a deep neural network classifier, with a simple app front end.',
        stack: ['MFCC', 'Neural networks', 'Audio'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/music_gender_app_classifier_with_NN', kind: 'repo' }],
      },
      {
        id: 'asl',
        title: 'Hand Gesture Classifier (American Sign Language)',
        venue: 'Independent study',
        year: '2023',
        summary: 'CNN trained on an MNIST-style American Sign Language dataset of 25 static gestures, reaching high accuracy on unseen signs.',
        stack: ['CNN', 'Computer vision'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/SignLanguageAiClassifier', kind: 'repo' }],
      },
      {
        id: 'simpsons',
        title: 'Simpsons Script Generator',
        venue: 'Independent study',
        year: '2023',
        summary: 'Character-level natural language generation with LSTMs, trained on a tokenised corpus of episode scripts to produce new, contextually plausible dialogue.',
        stack: ['LSTM', 'NLG', 'Text generation'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/RNNSimpsonsChapterGenerator', kind: 'repo' }],
      },

    ],
  },
];
