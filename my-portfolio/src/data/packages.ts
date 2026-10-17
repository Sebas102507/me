export type Package = {
  name: string;
  version: string;
  index: string;
  summary: string;
  install: string;
  links: { label: string; url: string }[];
  authors?: string;
};

export const PACKAGES: Package[] = [
  {
    name: 'videometa',
    version: '0.0.22',
    index: 'TestPyPI',
    summary:
      'Turns surveillance video into structured event annotations: a vision-language window filter, YOLO tracking and a VLM annotator. Integrations are optional extras, so nothing heavy is imported at install time.',
    install: 'pip install -i https://test.pypi.org/simple/ videometa',
    authors: 'with the uts-ilab-p08 team',
    links: [
      { label: 'TestPyPI', url: 'https://test.pypi.org/project/videometa/' },
      { label: 'Repository', url: 'https://github.com/uts-ilab-p08/videometa' },
      { label: 'Changelog', url: 'https://github.com/uts-ilab-p08/videometa/blob/main/CHANGELOG.md' },
    ],
  },
  {
    name: 'nucleus-ml',
    version: '0.0.22',
    index: 'TestPyPI',
    summary:
      'Dataframe-first building blocks for repeatable tabular machine-learning experiments: a feature/target contract, leakage-safe preprocessing, one train/evaluate interface, Optuna search, metrics and plots, artefact saving and Kaggle submission. The weather module adds walk-forward cross-validation for time-series forecasting.',
    install: 'pip install -i https://test.pypi.org/simple/ nucleus-ml',
    links: [{ label: 'TestPyPI', url: 'https://test.pypi.org/project/nucleus-ml/' }],
  },
  {
    name: 'tokenometrics',
    version: '0.0.8',
    index: 'TestPyPI',
    summary:
      'Fetches daily cryptocurrency market data from public APIs and reads and writes it to disk as date-indexed pandas DataFrames, so the same data code runs in experiment notebooks and in deployed FastAPI services. No API keys required.',
    install: 'pip install -i https://test.pypi.org/simple/ tokenometrics',
    authors: 'with D. Zúñiga Cubides and C. Giraldo Duque',
    links: [{ label: 'TestPyPI', url: 'https://test.pypi.org/project/tokenometrics/' }],
  },
];
