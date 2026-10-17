import horusLogo from '../assets/projects/horus_logo.png';
import finsightHero from '../assets/projects/finsight_hero.png';
import finsightMark from '../assets/projects/finsight_mark.svg';
import brainyLogo from '../assets/projects/brainy_logo.png';
import brainyBrain from '../assets/projects/brainy_brain.png';
import carviLogo from '../assets/projects/carvi_logo.png';
import musicApp from '../assets/projects/music_app.png';
import xrayApp from '../assets/projects/xray_app.jpg';
import foodSamples from '../assets/projects/food_samples.jpg';
import airbnbArch from '../assets/projects/airbnb_architecture.jpg';
import nycTaxiArch from '../assets/projects/nyctaxi_architecture.jpg';
import youtubeArch from '../assets/projects/youtube_architecture.jpg';

export type ProjectLink = { label: string; url: string; kind?: 'repo' | 'live' | 'doc' | 'package' | 'org' | 'video' };

/** Visual identity taken from the project itself: its own background, text and accent colours, logo and a screenshot. */
export type ProjectBrand = {
  bg: string;
  fg: string;
  accent: string;
  /** Second accent, used for chips and the flag border when set. */
  accent2?: string;
  /** Colour of muted text on the card. */
  muted: string;
  /** Text colour on top of the accent (primary button). Defaults to white. */
  onAccent?: string;
  /** Logo image shown at the top of the card. */
  logo?: string;
  logoHeight?: number;
  /** Word mark rendered as text when the project has no logo file. */
  wordmark?: string;
  /** Screenshot or artwork shown beside the text. */
  image?: string;
  imageAlt?: string;
  /** Fit for the artwork: cover fills the frame, contain keeps the whole image. */
  imageFit?: 'cover' | 'contain';
};

export type Project = {
  id: string;
  title: string;
  venue: string;
  year: string;
  /** Domain the project serves, shown as a flag on the card. */
  topic?: string;
  summary: string;
  contributions?: string[];
  stack: string[];
  links: ProjectLink[];
  components?: { name: string; description: string; url: string }[];
  brand?: ProjectBrand;
};

export type ProjectGroup = { heading: string; blurb?: string; items: Project[] };

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    heading: 'Top projects',
    items: [
      {
        id: 'cctv',
        title: 'Horus: Interactive Surveillance Video Querying',
        venue: 'Industry project with police investigators · six-repository team build',
        year: '2026',
        topic: 'Security',
        summary:
          'Ask a camera archive a question and get the moment, not the tape. Long, mostly uneventful CCTV footage is reduced to structured event annotations by a vision-language pipeline, indexed for retrieval-augmented question answering and surfaced to investigators through the Horus desktop interface.',
        contributions: [
          'VideoMeta: a three-stage pipeline (Qwen3-VL window significance filter, YOLO26 + ByteTrack tracking, VLM event annotator) released as a Python package.',
          'RAG layer over the MEVA event annotations with Qdrant vector search, consumed in-process by the FastAPI backend.',
          'Next.js 15 investigator UI with grid and timeline review, backed by Supabase authentication.',
        ],
        stack: ['PyTorch', 'Qwen3-VL', 'YOLO', 'Qdrant', 'FastAPI', 'Supabase', 'Next.js'],
        links: [
          { label: 'Live application', url: 'https://cctvai.site', kind: 'live' },
          { label: 'Watch the demo', url: 'https://www.youtube.com/watch?v=vFGvV-Vu80s', kind: 'video' },
          { label: 'Organisation', url: 'https://github.com/uts-ilab-p08', kind: 'org' },
        ],
        components: [
          { name: 'videometa', description: 'Video to structured event annotations; published on TestPyPI.', url: 'https://github.com/uts-ilab-p08/videometa' },
          { name: 'video-annotation-pipeline', description: 'Notebooks that pull MEVA clips, run detection and a local VLM.', url: 'https://github.com/uts-ilab-p08/video-annotation-pipeline' },
          { name: 'iLabs-capstone-rag', description: 'Vector index and natural-language retrieval over event annotations.', url: 'https://github.com/uts-ilab-p08/iLabs-capstone-rag' },
          { name: 'surveillance-backend', description: 'FastAPI search relay, clip, camera and query-history API.', url: 'https://github.com/uts-ilab-p08/surveillance-backend' },
          { name: 'cctv-query-frontend', description: 'Horus Assistant, the investigator-facing interface.', url: 'https://github.com/uts-ilab-p08/cctv-query-frontend' },
          { name: 'blip-captioning-poc', description: 'Evaluation of BLIP captioning for CCTV search, with full report.', url: 'https://github.com/uts-ilab-p08/blip-captioning-poc' },
        ],
        brand: { bg: '#0c0d10', fg: '#f3f5f9', accent: '#5b8fd6', muted: 'rgba(243,245,249,0.68)', image: horusLogo, imageAlt: 'Horus logo', imageFit: 'contain' },
      },
      {
        id: 'finsight',
        title: 'FinSight AI: Market and Enterprise Synthesizer',
        venue: 'NLP research group project',
        year: '2026',
        topic: 'Finance',
        summary:
          'Conversational financial analysis backed by live market data. A LangChain ReAct agent served by FastAPI calls six financial tools exposed through a FastMCP server and answers with retrieval-augmented generation over SEC 10-K filings and financial news in ChromaDB. Fully containerised, with RAG evaluation results and a test suite in the repository.',
        stack: ['LangChain', 'FastMCP', 'ChromaDB', 'FastAPI', 'React 19', 'Tailwind CSS v4', 'Docker Compose'],
        links: [
          { label: 'Repository', url: 'https://github.com/UtsNlpGroup/FinSightAI', kind: 'repo' },
        ],
        brand: { bg: '#f6f2ff', fg: '#14142b', accent: '#7e14ff', accent2: '#47bfff', muted: '#5b5b7a', logo: finsightMark, logoHeight: 34, wordmark: 'FinSight AI', image: finsightHero, imageAlt: 'FinSight AI layered platform artwork', imageFit: 'contain' },
      },
      {
        id: 'brainy',
        title: 'Brainy Noise: Noise Classification in Brain MRI Scans',
        venue: 'Undergraduate thesis with honourable mention, Pontificia Universidad Javeriana',
        year: '2023',
        topic: 'Healthcare',
        summary:
          'A diagnostic aid for radiologists: upload a brain MRI scan and get an instant quality assessment from a CNN that classifies noise levels. Delivered as microservices (model service, API gateway, user management, query results) with an Angular front end, Docker Compose orchestration and notebooks for data preparation, training and evaluation.',
        stack: ['TensorFlow / Keras', 'CNN', 'Flask', 'Java (Spring)', 'Angular', 'Docker Compose'],
        links: [{ label: 'Organisation', url: 'https://github.com/Proyecto-de-Grado-Brainy-Noise', kind: 'org' }],
        brand: { bg: '#e7e7e7', fg: '#0b2a4a', accent: '#0057b8', accent2: '#f8cd00', muted: '#4a5a6e', logo: brainyLogo, logoHeight: 40, image: brainyBrain, imageAlt: 'Brainy Noise brain mark', imageFit: 'contain' },
      },
      {
        id: 'arrivo',
        title: 'Arrivo: A Grounded Settlement-Planning Agent',
        venue: 'Microsoft Agents League 2026, Reasoning Agents track',
        year: '2026',
        topic: 'Migration & civic',
        summary:
          'Your first sixty days in Australia, reasoned out with sources. The agent classifies the visa, grounds entitlements in a knowledge base of official government documents (Azure AI Search on Microsoft Foundry), matches affordable suburbs, topologically sorts the settlement dependency graph and verifies each step. Every claim carries a citation; when evidence is insufficient the agent abstains rather than guessing.',
        stack: ['Microsoft Foundry', 'Azure AI Search', 'Python', 'Agentic reasoning'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/Arrivo_Microsoft_AI_Hackathon', kind: 'repo' }],
        brand: { bg: '#f3f4fb', fg: '#14142b', accent: '#3a86ff', accent2: '#8338ec', muted: '#4a4a68', wordmark: 'Arrivo' },
      },
      {
        id: 'bullets',
        title: 'Bullets Over Hugs: The Cost of the Global Arms Race',
        venue: 'Data visualisation project · organisation Data-Visualization-Bullets-Over-Hugs',
        year: '2026',
        topic: 'Defence & policy',
        summary:
          'Interactive multi-page Streamlit dashboard quantifying military spending, the human cost of conflict and the scale of nuclear arsenals: an opportunity-cost re-allocation tool, a conflict fatalities map, a destructive-scale visualisation and a localised nuclear impact simulator, built on SIPRI, Our World in Data, FAS and NUKEMAP sources.',
        stack: ['Streamlit', 'Plotly', 'pandas', 'NumPy'],
        links: [{ label: 'Repository', url: 'https://github.com/Data-Visualization-Bullets-Over-Hugs/Bullets-Over-Hugs', kind: 'repo' }],
        brand: { bg: 'radial-gradient(circle at top, #08152f 0%, #050b18 55%, #040812 100%)', fg: '#edf2f4', accent: '#ef233c', muted: 'rgba(237,242,244,0.7)', wordmark: 'Bullets Over Hugs' },
      },
      {
        id: 'xray',
        title: 'Chest X-Ray Denoising AI',
        venue: 'Independent study',
        year: '2023',
        topic: 'Healthcare',
        summary:
          'Convolutional autoencoders that remove Gaussian noise from chest radiographs. Three latent sizes are trained and compared, served by a Django backend and a web app where you upload a noisy X-ray and see the reconstruction side by side.',
        stack: ['TensorFlow / Keras', 'Autoencoders', 'Django', 'Angular', 'Docker Compose'],
        links: [
          { label: 'Watch the demo', url: 'https://www.youtube.com/watch?v=F9ZuagTIFjI', kind: 'video' },
          { label: 'Repository', url: 'https://github.com/Sebas102507/chest_xray_autoencoders_denoising', kind: 'repo' },
        ],
        brand: { bg: '#000000', fg: '#ffffff', accent: '#ffffff', onAccent: '#000000', muted: 'rgba(255,255,255,0.65)', wordmark: 'Chest X-Ray Denoising AI', image: xrayApp, imageAlt: 'Chest X-Ray Denoising AI web app', imageFit: 'cover' },
      },
      {
        id: 'food101',
        title: 'Food-101: Transfer Learning and Fine-Tuning',
        venue: 'Deep learning project',
        year: '2026',
        topic: 'Computer vision',
        summary:
          'Frozen-backbone GoogLeNet, MobileNetV3 and ResNet-50 classifiers compared under one training loop, then controlled fine-tuning that progressively unfreezes deeper MobileNetV3 blocks. Unfreezing the last six blocks reached 79.2% test accuracy across 101 food classes. Seeds fixed; runs locally and on Colab.',
        stack: ['PyTorch', 'torchvision', 'pytorch-ignite', 'MobileNetV3'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/CNN_Food101', kind: 'repo' }],
        brand: { bg: '#fff7ed', fg: '#431407', accent: '#ea580c', accent2: '#16a34a', muted: '#7c4a2b', wordmark: 'Food-101', image: foodSamples, imageAlt: 'Random sample of Food-101 classes', imageFit: 'cover' },
      },
      {
        id: 'carvi',
        title: 'CarVi: Vehicle Recognition from a Single Photo',
        venue: 'Independent study',
        year: '2023',
        topic: 'Automotive',
        summary:
          'Point your phone at a car and get its details. A lightweight MobileNetV2 detector runs on device through TensorFlow Lite for real-time analysis, with a Python backend for the heavier ResNet-50 path. Flutter app plus model service.',
        stack: ['Flutter', 'TensorFlow Lite', 'MobileNetV2', 'ResNet-50', 'Python'],
        links: [
          { label: 'Watch the demo', url: 'https://www.youtube.com/watch?v=cO9H8rxjIWI', kind: 'video' },
          { label: 'Mobile app', url: 'https://github.com/Sebas102507/carvi_app', kind: 'repo' },
          { label: 'Model backend', url: 'https://github.com/Sebas102507/Carvi_Deep_Learning_Mobile_App', kind: 'repo' },
        ],
        brand: { bg: '#f6f6f9', fg: '#2a2c42', accent: '#e5253b', muted: '#5c5f78', logo: carviLogo, logoHeight: 30 },
      },
      {
        id: 'music',
        title: 'Music Genre Classifier',
        venue: 'Independent study, with Alejandro Morales',
        year: '2023',
        topic: 'Audio & music',
        summary:
          'Drop a 30-second clip and get its genre. MFCC features feed a neural network trained on the GTZAN dataset (ten genres). React front end, FastAPI API with Celery workers, RabbitMQ, MongoDB and Google Cloud Storage for the audio.',
        stack: ['MFCC', 'scikit-learn', 'FastAPI', 'Celery', 'React', 'MongoDB'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/music_gender_app_classifier_with_NN', kind: 'repo' }],
        brand: { bg: '#242424', fg: '#ffffff', accent: '#646cff', accent2: '#00cc69', muted: 'rgba(255,255,255,0.65)', wordmark: 'Music Genre Classifier', image: musicApp, imageAlt: 'Music Genre Classifier upload screen', imageFit: 'cover' },
      },
      {
        id: 'airbnb-elt',
        title: 'Sydney Airbnb ELT Pipeline with Airflow, dbt and PostgreSQL',
        venue: 'End-to-end data engineering project · Medallion architecture',
        year: '2025',
        topic: 'Hospitality & housing',
        summary:
          'Production Medallion pipeline joining a year of Sydney Airbnb snapshots with Census demographics. Airflow on Google Cloud upserts raw files into PostgreSQL; dbt builds incremental Silver models, Type 2 slowly changing dimensions, a star schema and data marts. Findings: 97% of multi-listing hosts stay in one LGA, and Airbnb income rarely covers the median mortgage.',
        stack: ['Apache Airflow', 'dbt', 'PostgreSQL', 'Google Cloud', 'SQL'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/sydney-airbnb-elt-pipeline', kind: 'repo' }],
        brand: { bg: '#fff5f6', fg: '#1f1a1b', accent: '#ff5a5f', accent2: '#ff9900', muted: '#6b5d60', wordmark: 'Airflow · dbt · PostgreSQL', image: airbnbArch, imageAlt: 'Sydney Airbnb pipeline architecture', imageFit: 'contain' },
      },
      {
        id: 'nyc-taxi',
        title: 'NYC Taxi Lakehouse and Fare Prediction on Databricks',
        venue: 'End-to-end data engineering project · Medallion architecture',
        year: '2025',
        topic: 'Mobility & transport',
        summary:
          'Almost a billion TLC taxi trips cleaned with PySpark into a Delta table, Spark SQL views answering eight business questions, and a Decision Tree that predicts the total fare with RMSE 4.26 against a 30.5 baseline. Short trips under five minutes earn drivers the most per hour.',
        stack: ['Databricks', 'PySpark', 'Delta Lake', 'Spark SQL', 'scikit-learn'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/nyc-taxi-databricks-pipeline', kind: 'repo' }],
        brand: { bg: '#fff8e1', fg: '#1b1b1b', accent: '#ff3621', accent2: '#f5c518', muted: '#6b5d2e', wordmark: 'Databricks · Delta Lake', image: nycTaxiArch, imageAlt: 'NYC taxi pipeline architecture', imageFit: 'contain' },
      },
      {
        id: 'yt-lakehouse',
        title: 'YouTube Trending Lakehouse on Snowflake',
        venue: 'End-to-end data engineering project · Medallion architecture',
        year: '2025',
        topic: 'Media & entertainment',
        summary:
          'Four years of daily YouTube trending data staged from Azure Blob Storage into Snowflake and refined through Bronze, Silver and Gold schemas, with nine data-quality fixes and a channel-launch strategy: People & Blogs globally, Science & Technology in Korea and Mexico.',
        stack: ['Snowflake', 'Azure Blob Storage', 'SQL', 'Plotly'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/youtube-trending-snowflake-lakehouse', kind: 'repo' }],
        brand: { bg: '#eaf6fd', fg: '#0b2a3a', accent: '#29b5e8', accent2: '#0078d4', muted: '#4a6675', wordmark: 'Snowflake · Azure', image: youtubeArch, imageAlt: 'YouTube trending lakehouse architecture', imageFit: 'contain' },
      },


    ],
  },
  {
    heading: 'Other projects',
    items: [
      {
        id: 'cia',
        title: 'CIA Declassified Files',
        venue: 'Personal project',
        year: '2021',
        topic: 'Web scraping',
        summary:
          'The CIA reading room, scraped and browsable. A Scrapy spider crawls the declassified documents, the items are exported as JSON to Zyte, and a static Bootstrap page fetches that feed and renders every document as an expandable card with a link to the original.',
        stack: ['Scrapy', 'Zyte', 'JavaScript', 'Bootstrap'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/CIA_documents_scraping', kind: 'repo' }],
      },
      {
        id: 'simpsons',
        title: 'Simpsons Script Generator',
        venue: 'Independent study',
        year: '2023',
        topic: 'Text generation',
        summary:
          'A word-level LSTM trained on Simpsons episode summaries. Give it a seed such as \u201cHomer\u201d or \u201cSpringfield\u201d and it writes new, Simpsons-flavoured text one word at a time, with a mask that stops it from emitting unknown tokens.',
        stack: ['TensorFlow / Keras', 'LSTM', 'TextVectorization', 'NLG'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/RNNSimpsonsChapterGenerator', kind: 'repo' }],
      },
      {
        id: 'sparkify',
        title: 'Sparkify: Predicting Customer Churn with Spark SQL',
        venue: 'Team project on Databricks',
        year: '2021',
        topic: 'Customer churn',
        summary:
          'Which users of a music-streaming service are about to cancel or downgrade? The event log is explored with Spark SQL on Databricks, cleaned, turned into user-level features (device, listening time, pages visited, level, location) and fed to a Decision Tree. The notebook also answers eight business questions: at-risk users peak at 10 am and at weekends, hear more adverts, and leave 28 days after downgrading.',
        stack: ['Apache Spark', 'Spark SQL', 'Databricks', 'PySpark MLlib'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/BigData_Sparkify', kind: 'repo' }],
      },



      {
        id: 'lstm',
        title: 'LSTM Stock Forecasting',
        venue: 'Independent study',
        year: '2023',
        topic: 'Finance',
        summary:
          'Forecasting The Home Depot\u2019s share price with an LSTM. The pipeline collects daily prices from Finnhub, scrapes annual and quarterly ratios (current ratio, P/E, debt to equity, asset turnover, ROE, P/S, free cash flow per share), adds earnings-call sentiment, Federal Reserve interest rates and CPI, joins everything into one time series and evaluates the model with MSE and R².',
        stack: ['TensorFlow / Keras', 'LSTM', 'pandas', 'BeautifulSoup', 'Finnhub · FRED APIs'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/LSTMStockForecasting', kind: 'repo' }],
      },
      {
        id: 'fifa',
        title: 'FIFA Players: Exploratory Data Analysis',
        venue: 'Independent study',
        year: '2022',
        topic: 'Sports analytics',
        summary:
          'Cleaning, exploring and testing hypotheses on the FIFA players dataset: parsing values and wages, picking a preferred position per player, correlations between age, rating and value, wage comparisons across clubs, and three hypotheses checked with a hand-written gradient-descent linear regression.',
        stack: ['pandas', 'seaborn', 'NumPy', 'pandas-profiling'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/fifaDataExploration', kind: 'repo' }],
      },
      {
        id: 'weather',
        title: 'Weather Intelligence: Forecasting Service for Sydney',
        venue: 'Advanced machine learning project',
        year: '2026',
        topic: 'Weather',
        summary:
          'FastAPI service that serves two models trained on the Open-Meteo historical archive: a regression model for a Climate Comfort Index at one-, two- and three-day horizons and a multiclass Weather Hazard Category at seven days. Experiments use walk-forward cross-validation through the nucleus-ml package. Deployed on Render with Docker.',
        stack: ['scikit-learn', 'Optuna', 'FastAPI', 'Docker', 'uv', 'Render'],
        links: [
          { label: 'Live API documentation', url: 'https://three6120-26sp-at2-25945320-api.onrender.com/docs', kind: 'live' },
          { label: 'nucleus-ml on TestPyPI', url: 'https://test.pypi.org/project/nucleus-ml/', kind: 'package' },
        ],
      },
      {
        id: 'parliament',
        title: 'Text Mining of Parliamentary Inquiry Submissions',
        venue: 'Natural language processing project',
        year: '2026',
        topic: 'Public policy',
        summary:
          'End-to-end NLP analysis of 295 public submissions to the Australian inquiry into the conduct of the 2025 federal election. PDF submissions are parsed, cleaned and analysed with topic modelling, keyword extraction and sentiment analysis to produce aggregate, theme-level evidence.',
        stack: ['Python', 'spaCy / NLTK', 'Topic modelling', 'Jupyter'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/nlp-parliamentary-inquiry-text-mining', kind: 'repo' }],
      },
      {
        id: 'medical',
        title: 'AI Agent for Querying Patient Medical Histories',
        venue: 'Technical challenge, AWS',
        year: '2024',
        topic: 'Healthcare',
        summary:
          'Serverless RAG architecture on AWS: Mixtral 8x7B on a SageMaker endpoint, a GPT-J 6B embedding model with OpenSearch as vector store, Lambda functions for upload and document agents, and a WebSocket API for streaming answers. Documented in the repository and a companion Medium article.',
        stack: ['AWS SageMaker', 'OpenSearch', 'Lambda', 'LangChain', 'Mixtral 8x7B'],
        links: [
          { label: 'Repository', url: 'https://github.com/Sebas102507/ai_medical_history_agent', kind: 'repo' },
          { label: 'Article', url: 'https://medium.com/@libros123bmw/ai-system-to-handle-and-query-patients-medical-history-using-mixtral-8x7b-langchain-and-aws-e4615381e222', kind: 'doc' },
        ],
      },
      {
        id: 'vic-etl',
        title: 'Research Vice-Rectory ETL on Apache Airflow',
        venue: 'Pontificia Universidad Javeriana · organisation VicerrectoriaInvestigacion',
        year: '2023',
        topic: 'Higher education',
        summary:
          'Production Airflow DAG consolidating the university’s research data: contracts, validated scientific output, faculty core data, projects, the institutional repository, journals and research seed groups, with connectors for Oracle, Scopus and Web of Science.',
        stack: ['Apache Airflow', 'Docker Compose', 'pandas', 'Oracle', 'Scopus / WoS APIs'],
        links: [{ label: 'Repository', url: 'https://github.com/VicerrectoriaInvestigacion/Vic_ETL_airflow', kind: 'repo' }],
      },
      {
        id: 'kmnist',
        title: 'Handwritten Hiragana Classification (Kuzushiji-MNIST)',
        venue: 'Deep learning project',
        year: '2026',
        topic: 'Computer vision',
        summary: 'Neural network in PyTorch trained on 70,000 images of ten Hiragana classes, with learning curves and confusion-matrix evaluation.',
        stack: ['PyTorch', 'NumPy'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/japanese_characters_classifier', kind: 'repo' }],
      },
      {
        id: 'rubik',
        title: 'Solving the Rubik’s Cube with Deep Q-Networks',
        venue: 'Independent study',
        year: '2023',
        topic: 'Reinforcement learning',
        summary: 'Reinforcement learning agent trained with a DQN to solve scrambled cubes.',
        stack: ['Reinforcement learning', 'DQN'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/RubikCubeDQN', kind: 'repo' }],
      },
      {
        id: 'meteonet',
        title: 'MeteoNet: Temperature and Precipitation Forecasting with LSTMs',
        venue: 'Independent study',
        year: '2023',
        topic: 'Weather',
        summary: 'Forecasting model that projects temperature and precipitation with LSTM networks, capturing temporal dependencies from preprocessed time-series data.',
        stack: ['LSTM', 'TensorFlow / Keras', 'Time series'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/MeteoNetForecasting', kind: 'repo' }],
      },
      {
        id: 'asl',
        title: 'Hand Gesture Classifier (American Sign Language)',
        venue: 'Independent study',
        year: '2023',
        topic: 'Accessibility',
        summary: 'CNN trained on an MNIST-style American Sign Language dataset of 25 static gestures, reaching high accuracy on unseen signs.',
        stack: ['CNN', 'Computer vision'],
        links: [{ label: 'Repository', url: 'https://github.com/Sebas102507/SignLanguageAiClassifier', kind: 'repo' }],
      },

    ],
  },
];

export const TOP_PROJECTS = PROJECT_GROUPS[0].items;
export const PROJECT_COUNT = PROJECT_GROUPS.reduce((n, g) => n + g.items.length, 0);
