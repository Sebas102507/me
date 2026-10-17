export type ExperienceItem = {
  organisation: string;
  client?: string;
  role: string;
  start: string;
  end: string;
  location: string;
  logoKeys?: string[];
  goal: string;
  challenge: string;
  outcome: string;
  details: string[];
  tools: string[];
  links?: { label: string; url: string }[];
  images?: { file: string; caption: string }[];
};

export const WORK: ExperienceItem[] = [
  {
    organisation: 'University of Technology Sydney',
    client: 'Advancement and Alumni Unit',
    role: 'Data Analyst',
    start: 'Sep 2025',
    end: 'Present',
    location: 'Sydney, Australia',
    logoKeys: ['uts'],
    goal: 'Give a fundraising unit that had never had a business intelligence environment a modern, trusted analytics platform.',
    challenge:
      'All the data lived in a legacy on-premises SQL Server database. There were no dashboards, CRM records were inconsistent, and the unit measured its performance by hand.',
    outcome:
      'The Advancement data estate now runs on Microsoft Fabric. Five daily-refreshed Power BI dashboards give a single view of employee performance, funds raised and engagement gaps against internal intervals and CASE benchmarks. The unit calls them a game changer.',
    details: [
      'Led the migration of the database and its pipelines to a Microsoft Fabric Lakehouse, now the single source of truth, refreshed daily.',
      'Built the end-to-end ETL pipelines behind prospects, gifts, attributes, engagement and CASE metrics, fed by scheduled Blackbaud Raiser’s Edge queries delivered to an FTP server.',
      'Defined the data quality strategy: validation checks and notebooks that flag issues and generate correction files back into Raiser’s Edge.',
      'Led the university-wide phone data cleansing initiative, standardising 400,000 phone numbers, and coordinate with Live Alumni to keep CRM records enriched.',
      'Drove adoption with lunch-and-learn sessions, KPI glossaries and documentation, and Microsoft Forms for feedback and bug reports.',
    ],
    tools: ['Microsoft Fabric', 'Power BI', 'SQL Server', 'Blackbaud Raiser’s Edge NXT', 'Live Alumni', 'Python', 'Apache Airflow'],
  },
  {
    organisation: 'Nike',
    client: 'via Wizeline',
    role: 'Data Engineer III',
    start: 'Dec 2024',
    end: 'Jun 2025',
    location: 'Bogotá, Colombia · hybrid',
    logoKeys: ['nike', 'wizeline'],
    goal: 'Modernise the pipelines behind Nike’s global workplace data and open them up for self-service analytics.',
    challenge:
      'Core pipelines still ran on Apache Airflow inside a fourteen-member, multicultural team spread between Guadalajara, Mexico City and Nike\u2019s Oregon headquarters. Seven global domains had to keep flowing during the change, and Databricks costs were climbing.',
    outcome:
      'Core DAGs moved to Databricks Workflows, a medallion model on Delta Lake with governance through Unity Catalog and Collibra enabled self-service analytics for Data Science and HR, and monthly pipeline costs fell by 30%.',
    details: [
      'Worked daily with a multicultural team: engineers in Guadalajara and Mexico City, and Nike\u2019s data and product teams in Beaverton, Oregon.',
      'Oversaw and mentored three Level 2 data engineers while orchestrating the Airflow to Databricks Workflows migration.',
      'Engineered and maintained seven core pipelines ingesting global data for locations, employees, leasing, building access and IoT sensor-based headcounts.',
      'Partnered with analysts and product managers in agile sprints, translated business needs into technical specifications and presented on demo days.',
      'Spearheaded the cost-optimisation analysis behind the 30% reduction in monthly execution costs.',
    ],
    tools: ['Databricks', 'Delta Lake', 'Unity Catalog', 'Collibra', 'Apache Airflow', 'Apache Spark', 'Python', 'SQL'],
  },
  {
    organisation: 'Amadeus',
    client: 'via Groupe SII',
    role: 'Semi-senior Data Engineer',
    start: 'Apr 2024',
    end: 'Dec 2024',
    location: 'Bogotá, Colombia · remote',
    logoKeys: ['amadeus', 'sii'],
    goal: 'Move Amadeus’s petabyte-scale analytics for airline, reservation and hospitality partners, including Hilton and Marriott, from a legacy on-premises platform to Azure.',
    challenge:
      'Critical jobs took three days to run, the business could not tolerate downtime, and the migration had to prove the cloud results matched the old system exactly, all coordinated with Amadeus\u2019s Atlanta team and colleagues in France, India and Canada.',
    outcome: 'A phased migration with cloud and on-premises systems running in parallel delivered zero downtime and over 400× faster processing: from three days to under ten minutes.',
    details: [
      'Worked with Amadeus\u2019s Atlanta-based team and colleagues from France, India and Canada across time zones.',
      'Led two engineers within a ten-person team through the migration to an Azure and Databricks environment.',
      'Redesigned and deployed the pipelines for petabyte-scale partner data.',
      'Ran cloud and on-premises in parallel to guarantee data consistency before cutover.',
    ],
    tools: ['Azure', 'Databricks', 'Apache Spark', 'Azure Data Factory', 'Azure Synapse', 'Python', 'SQL'],
  },
  {
    organisation: 'Grasply · BoostEducation',
    role: 'Semi-senior Machine Learning Engineer (part time)',
    start: 'Oct 2023',
    end: 'Jun 2025',
    location: 'Fort Lauderdale, FL · remote',
    logoKeys: ['grasply'],
    goal: 'Build adaptive, AI-driven digital teachers for an early-stage education startup.',
    challenge: 'There was no platform yet. The cognitive architecture that lets an AI tutor learn from every interaction had to be designed from the ground up.',
    outcome: 'A working platform with a data ingestion module, an NLP insights engine and a feedback loop that keeps each agent’s knowledge graph current, plus ten institutional partnerships across the US and Latin America and a pilot with a major Colombian bank.',
    details: [
      'Jointly created the proprietary Cognitive Architecture behind the adaptive teachers.',
      'Built the ingestion module for user interactions, the NLP processing engine and the knowledge-graph feedback loop.',
      'Helped drive business growth by securing institutional partnerships and opening the bank pilot.',
    ],
    tools: ['AWS', 'Amazon SageMaker', 'LangChain', 'Llama 2 · Mixtral · GPT', 'Chroma · Pinecone', 'Python', 'FastAPI'],
  },
  {
    organisation: 'Pontificia Universidad Javeriana',
    client: 'Vice-Rectory for Research',
    role: 'Coordinator, Competitive Intelligence · Semi-senior Data Scientist',
    start: 'Nov 2022',
    end: 'Feb 2024',
    location: 'Bogotá, Colombia · hybrid',
    logoKeys: ['javeriana'],
    goal: 'Give the university reliable analytics for more than 30,000 users and for its reporting to the Colombian Ministry of Education.',
    challenge: 'Reporting was manual and slow, publication data lived in external databases, and graduation honours were awarded with thresholds that were not fair across faculties.',
    outcome: 'Automated ETL pipelines produce the annual reports on graduate outcomes, dropout, subject success and enrolment; Scopus and Web of Science feed in automatically; and the honours algorithm I proposed is now university policy.',
    details: [
      'Developed and automated the ETL pipelines in Python (pandas) and SQL behind the ministry reporting.',
      'Built an Apache Airflow DAG consolidating contracts, validated research output, faculty data, projects, journals and seed groups.',
      'Established automated consumption layers from the Scopus API and Web of Science for faculty and student publications.',
      'Formulated the data-driven algorithm that sets honours thresholds by faculty grade distribution, since adopted by the university.',
    ],
    tools: ['Python · pandas', 'SQL', 'Oracle', 'Apache Airflow', 'Scopus API', 'Web of Science', 'Power BI'],
  },
  {
    organisation: 'Pontificia Universidad Javeriana',
    client: 'SEKIA',
    role: 'Student Researcher (part time)',
    start: 'May 2022',
    end: 'Jun 2023',
    location: 'Bogotá, Colombia · hybrid',
    logoKeys: ['javeriana'],
    goal: 'Support research projects and teach data analytics and machine learning to students who were just starting.',
    challenge: 'Many projects had no dataset to begin with, and students struggled to move from a model that runs to a model that performs.',
    outcome: 'Delivered lectures on building scrapers to gather training data, on neural networks, gradient descent and optimisation, and on tuning models for precision, accuracy and F1. Built a classifier that predicts which books library users are likely to borrow from their programme, background, age and socio-economic situation.',
    details: [
      'Recorded a formative session on web scraping with Python, available on YouTube.',
      'Delivered the library book-usage classification model to the university library.',
    ],
    tools: ['Python', 'scikit-learn', 'TensorFlow', 'BeautifulSoup · Selenium', 'pandas'],
    links: [{ label: 'Watch: Introducción al Web Scraping con Python', url: 'https://www.youtube.com/watch?v=32drh8N5TPE' }],
  },
  {
    organisation: 'Jesuit Refugee Service Colombia',
    role: 'Data Scientist (internship)',
    start: 'Jan 2020',
    end: 'Jul 2022',
    location: 'Bogotá, Colombia · remote',
    logoKeys: ['jrs'],
    goal: 'Make every donated dollar go as far as possible in refugee camps.',
    challenge: 'Resource use was hard to predict, vulnerable groups were hard to identify in time, and funding from donors like GIZ, the European Union, the Foreign Ministry and PRM could run out before anyone noticed.',
    outcome: 'Linear models allocate donor funds where they do the most good, forecasts anticipate shortfalls early enough to reach out to donors, and classification models flag populations at risk.',
    details: [
      'Applied linear programming to maximise the allocation of donor funds for camp necessities.',
      'Trained neural networks and random forests to predict water, food, medicine and money usage, and to classify vulnerable populations.',
      'Used K-nearest neighbours to find groups at risk of not receiving adequate resources or more susceptible to disease.',
      'Automated data workflows with Azure Data Factory to monitor resource utilisation and environmental conditions across camps, visualised in Power BI.',
    ],
    tools: ['Python', 'scikit-learn', 'Linear programming', 'Azure Data Factory', 'Power BI', 'Excel'],
  },
  {
    organisation: 'Fluppy',
    client: 'Javeriana Territorio Emprendedor',
    role: 'Co-founder and Software Developer',
    start: 'Jan 2020',
    end: 'Jul 2021',
    location: 'Bogotá, Colombia',
    logoKeys: ['fluppy'],
    goal: 'Build a pet-focused startup: food, accessories, grooming, toys and dog walking for cat and dog owners, in one app.',
    challenge: 'We launched straight into the pandemic with a tiny team and a tinier budget, incubated through the university’s entrepreneurship programme.',
    outcome: 'Around 1,000 downloads on iOS and Android and a community of 2,000 followers on Instagram. My first lesson in shipping a product people actually use.',
    details: ['Built the client and store apps in Flutter with a Firebase backend.', 'Ran marketing, logistics and deliveries alongside the code.'],
    tools: ['Flutter · Dart', 'Firebase', 'iOS · Android'],
    images: [
      { file: 'fluppy_1.jpg', caption: 'Delivery day, Fluppy branded.' },
      { file: 'fluppy_2.jpg', caption: 'Application to the Javeriana entrepreneurship camp.' },
      { file: 'fluppy_3.jpg', caption: 'Two thousand followers on Instagram.' },
    ],
  },
];

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  logoKeys?: string[];
  notes?: string[];
};

export const EDUCATION: EducationItem[] = [
  {
    institution: 'University of Technology Sydney',
    degree: 'Master of Data Science and Innovation',
    period: 'Jul 2025 – Dec 2026',
    location: 'Sydney, Australia',
    logoKeys: ['uts'],
    notes: ['Artificial intelligence, data engineering, deep learning, NLP and data visualisation; industry capstone through UTS iLab.'],
  },
  {
    institution: 'Pontificia Universidad Javeriana',
    degree: 'Master in Artificial Intelligence · coursework',
    period: 'Jul 2022 – Jun 2023',
    location: 'Bogotá, Colombia',
    logoKeys: ['javeriana'],
    notes: [
      'Machine Learning: regression, SVM, decision trees, Naive Bayes, clustering, ensembles.',
      'Deep Learning: CNNs, RNNs, generative models, attention, transformers, reinforcement learning.',
      'Data Management: SQL and NoSQL, ETL and ELT, Hadoop, Spark, visualisation.',
    ],
  },
  {
    institution: 'Pontificia Universidad Javeriana',
    degree: 'Bachelor of Systems Engineering',
    period: '2019 – 2023',
    location: 'Bogotá, Colombia',
    logoKeys: ['javeriana'],
    notes: ['Grade 4.36 / 5 with a certificate of academic excellence.', 'Honourable mention for the graduation thesis, Brainy Noise.'],
  },
  {
    institution: 'University of Cincinnati',
    degree: 'Applied AI through Generative AI (LLMs) · AI in Business certificate',
    period: 'Jun 2023',
    location: 'Cincinnati, OH',
    logoKeys: ['uoc'],
    notes: ['In-person course at the Carl H. Lindner College of Business.'],
  },
  {
    institution: 'Boston College',
    degree: 'Forecasting · course',
    period: 'Jun 2022 – Jan 2023',
    location: 'Online',
    logoKeys: ['boston_college'],
    notes: ['Time-series forecasting with R.'],
  },
  {
    institution: 'Centro de Idiomas Asiáticos',
    degree: 'Chinese Studies · Mandarin',
    period: 'Jun – Jul 2021',
    location: 'Bogotá, Colombia',
  },
  {
    institution: 'Anglo American School',
    degree: 'High School Diploma',
    period: '2007 – 2018',
    location: 'Bogotá, Colombia',
    notes: ['Recognition for outstanding performance in computer science and technology, the only student selected in 2018.'],
  },
];

export type Certification = { name: string; issuer: string; date: string; logoKey?: string };

export const CERTIFICATIONS: Certification[] = [
  { name: 'AI Skills Fest 2026 · Generative AI and Microsoft Foundry', issuer: 'Microsoft', date: 'Jun 2026', logoKey: 'microsoft' },
  { name: 'AI Agents with Databricks', issuer: 'Databricks', date: 'May 2026', logoKey: 'databricks' },
  { name: 'IELTS Academic · C1', issuer: 'British Council', date: '2024', logoKey: 'british_council' },
  { name: 'AI in Business Certificate', issuer: 'University of Cincinnati', date: '2023', logoKey: 'uoc' },
];
