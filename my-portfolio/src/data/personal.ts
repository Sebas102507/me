export const VALUE_PILLARS: { title: string; text: string }[] = [
  { title: 'Cut cost and time', text: 'Three-day jobs to ten minutes. A 30% smaller Databricks bill. Migrations nobody notices.' },
  { title: 'Better data, better reporting', text: 'One governed source of truth, quality checks that fix records at the source, dashboards people actually open.' },
  { title: 'Automate what adds no value', text: 'Manual extracts, copy-paste reports and repeated clean-ups become pipelines that run on their own.' },
  { title: 'Better experiences', text: 'AI tutors that adapt, video you can search in plain English, agents that cite their sources.' },
];

export type Book = { title: string; author: string; why: string; cover: string; url: string };

export const BOOKS: Book[] = [
  {
    title: 'The Snowball: Warren Buffett and the Business of Life',
    author: 'Alice Schroeder',
    why: 'Compounding applies to skills and relationships, not just capital.',
    cover: 'snowball.jpg',
    url: 'https://www.amazon.com/dp/0553384619',
  },
  {
    title: 'The Outsiders',
    author: 'William N. Thorndike Jr.',
    why: 'Eight CEOs who ignored convention and allocated capital rationally. My favourite book on value.',
    cover: 'outsiders.jpg',
    url: 'https://www.amazon.com/dp/1422162672',
  },
  {
    title: 'The Man Who Solved the Market',
    author: 'Gregory Zuckerman',
    why: 'Jim Simons and the quant revolution: data, models and discipline beating intuition.',
    cover: 'market.jpg',
    url: 'https://www.amazon.com/dp/073521798X',
  },
  {
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    why: 'Every migration, dashboard and model lands through people. This is the manual.',
    cover: 'friends.jpg',
    url: 'https://www.amazon.com/dp/0671027034',
  },
];

export const HOBBIES: { title: string; text: string }[] = [
  {
    title: 'Competitive programming',
    text: 'Member of the ACM chapter at Javeriana from 2019 to 2020: intern programming competitions, a course on algorithmic complexity and data structures, and a first look at quantum computing.',
  },
  { title: 'Business books', text: 'I read about how companies and investors create value, and I keep a short list of the ones that changed how I think.' },
  { title: 'Building things', text: 'From a cardboard rover to a pet-delivery startup to Python packages. I like shipping.' },
];
