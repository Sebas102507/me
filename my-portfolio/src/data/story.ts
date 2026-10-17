export type ChapterImage = { file: string; caption: string; fit?: 'cover' | 'contain' };

export type Chapter = {
  id: string;
  years: string;
  place: string;
  title: string;
  text: string[];
  lesson?: string;
  images?: ChapterImage[];
};

// Image files are looked up by name in src/assets/story/ and src/assets/collage/.
export const CHAPTERS: Chapter[] = [
  {
    id: 'school',
    years: '2007 – 2018',
    place: 'Bogotá, Colombia',
    title: 'A cardboard rover, a printed hand, and a plaque',
    text: [
      'I grew up at Anglo American School in Bogotá, and the last two projects I built there still explain how I work. The first was a Mars-rover-inspired rover on Arduino with a versatile arm, driven from an Android app I wrote myself. It navigated, explored and picked things up with real precision, even if the chassis was cardboard.',
      'The second was a 3D-printed prosthetic hand. An Arduino mechanism gave it natural open and close movements, controlled from a phone. The photo shows only the hand, because the circuits went back to the school. In December 2018 the school gave me its recognition for outstanding performance in computer science and technology. I was the only student selected that year.',
    ],
    lesson: 'Take something hard, make it work, then make it useful for someone.',
    images: [
      { file: 'rover.jpg', caption: 'The Arduino rover with its mobile-controlled arm.' },
      { file: 'hand.jpg', caption: 'The 3D-printed prosthetic hand.' },
      { file: 'award_plaque.jpg', caption: 'Outstanding performance in computer science and technology, December 2018.' },
    ],
  },
  {
    id: 'university',
    years: '2019 – 2023',
    place: 'Bogotá, Colombia',
    title: 'Systems Engineering, and learning to work with data for real people',
    text: [
      'I studied Systems Engineering at the Pontificia Universidad Javeriana and finished with a 4.36 out of 5 and a certificate of academic excellence. In between I kept adding tools: a summer of Mandarin at the Centro de Idiomas Asiáticos in 2021, and a forecasting course with R at Boston College in 2022.',
      'University was never only lectures. In 2019 I joined the ACM chapter for competitive programming. In 2020 I co-founded Fluppy, a pet-care app incubated by the university\u2019s entrepreneurship programme that reached a thousand downloads in the middle of the pandemic. And from 2020 I had a job: at the Jesuit Refugee Service I used linear programming and forecasts to help decide where donor money should go, which taught me that a model only matters if someone acts on it.',
      'Later I coordinated competitive intelligence for the Vice-Rectory for Research, taught data analytics and machine learning as a student researcher, and took the Machine Learning, Deep Learning and Data Management courses of the Master in Artificial Intelligence. My thesis, Brainy Noise, a CNN-backed web tool that grades noise in brain MRI scans for radiologists, received an honourable mention. I graduated in September 2023.',
    ],
    lesson: 'A model only matters if someone acts on it.',
    images: [
      { file: 'badge_systems_engineer.png', caption: 'Systems Engineer, Pontificia Universidad Javeriana.', fit: 'contain' },
      { file: 'badge_thesis_honour.png', caption: 'Honourable mention for the graduation thesis, Brainy Noise.', fit: 'contain' },
      { file: '1691859040820.jpeg', caption: 'Presenting Brainy Noise, brain MRI noise classification.' },
      { file: 'fluppy_1.jpg', caption: 'Fluppy delivery day, 2020.' },
      { file: '1694799506198.jpeg', caption: 'Graduation day, September 2023.' },
    ],
  },
  {
    id: 'cincinnati',
    years: 'June 2023',
    place: 'Cincinnati, USA',
    title: 'A summer with generative AI at the University of Cincinnati',
    text: [
      'My first academic experience abroad, and in English: an in-person course on applied AI through generative AI and large language models at the University of Cincinnati. It was the moment language models stopped being a paper I read and became something I could build with.',
    ],
    images: [
      { file: '1688397817938.jpeg', caption: 'University of Cincinnati, June 2023.' },
      { file: '1688397817892.jpeg', caption: '1819 Innovation Hub.' },
    ],
  },
  {
    id: 'scale',
    years: '2023 – 2025',
    place: 'Bogotá and remote',
    title: 'Learning what scale really means',
    text: [
      'Two consulting roles took me to petabyte-scale systems. With SII Colombia I helped migrate Amadeus’s legacy analytics platform to Azure, including a critical job that went from three days to under ten minutes. With Wizeline I led a pod of engineers building Nike’s global workplace analytics on Databricks, and cut the monthly bill by about a third.',
      'In parallel, as a part-time machine learning engineer at Grasply AI, I co-designed the cognitive architecture behind adaptive AI tutors used by ten institutions across the US and Latin America. Teaching machines to teach people turned out to be the most human engineering I had done.',
    ],
    lesson: 'Scale is a people problem first: migrations succeed when nobody notices them.',
  },
  {
    id: 'sydney',
    years: '2025 – present',
    place: 'Sydney, Australia',
    title: 'Sydney: a master’s degree, a new home, and video that answers questions',
    text: [
      'In July 2025 I moved to Sydney to start the Master of Data Science and Innovation at UTS, and joined the university as a data analyst consultant, rebuilding the pipelines behind alumni and donor data.',
      'The degree became a place to build. A forecasting API and the nucleus-ml package. FinSightAI with the UTS NLP group. Arrivo, a reasoning agent for new migrants, for the Microsoft Agents League. And the iLab capstone with industry partners: natural-language search over CCTV footage, where our team published the VideoMeta package. The next chapter is being written now.',
    ],
    lesson: 'Every move so far has been toward problems worth solving with people worth solving them with.',
    images: [
      { file: '1753066064217.jpeg', caption: 'First day at UTS, July 2025.' },
      { file: 'sydney_2025_1.jpg', caption: 'Delegate at Snowflake World Tour, Sydney.' },
      { file: 'sydney_2025_2.jpg', caption: 'Field trip, New South Wales.' },
      { file: 'CB16499D-3D2F-49D1-88BF-7B9E93373C90.JPG', caption: 'Sydney Opera House from the harbour.' },
    ],
  },
];
