export interface Publisher {
  name: string;
  journalName: string;
  description: string;
  githubOrg: string;
  siteUrl: string;
}

export interface Editor {
  name: string;
  role: string;
  email: string;
}

export interface Issue {
  id: string;
  title: string;
  volume: number;
  issue: number;
  year: number;
  authors: string[];
  editors: string[];
  repoName: string;
  arxiv?: string;
  abstract: string;
}

export interface Config {
  publisher: Publisher;
  editors: Editor[];
  issues: Issue[];
}