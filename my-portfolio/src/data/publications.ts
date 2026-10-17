export type Publication = {
  authors: string;
  year: string;
  title: string;
  venue: string;
  date: string;
  summary: string;
  url: string;
  kind: 'article' | 'report';
};

export const PUBLICATIONS: Publication[] = [
  {
    authors: 'Vargas T., J.',
    year: '2024',
    title: 'AI system to handle and query patients’ medical history using Mixtral 8x7B, LangChain and AWS',
    venue: 'Medium',
    date: '6 March 2024',
    summary:
      'Describes a serverless architecture that lets healthcare providers upload records and ask questions over them, combining a SageMaker-hosted Mixtral 8x7B endpoint, OpenSearch vector search and streaming responses over a WebSocket API.',
    url: 'https://medium.com/@libros123bmw/ai-system-to-handle-and-query-patients-medical-history-using-mixtral-8x7b-langchain-and-aws-e4615381e222',
    kind: 'article',
  },
  {
    authors: 'Vargas T., J.',
    year: '2023',
    title: 'Deploy a LLM model on AWS using LangChain and Docker',
    venue: 'Medium',
    date: '13 November 2023',
    summary:
      'Step-by-step guide to packaging a LangChain application in a Docker image, publishing it to ECR and serving it from AWS Lambda.',
    url: 'https://medium.com/@libros123bmw/deploy-a-llm-on-aws-using-langchain-and-docker-ff9ba7a9e7e0',
    kind: 'article',
  },
];
