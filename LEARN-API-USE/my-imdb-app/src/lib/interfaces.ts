export interface SearchData {
  searchType: string;
  expression: string;
  results: SearchResult[];
  errorMessage: string;
}

export interface SearchResult {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}

export interface Model<T> {
  items: T[] | undefined;
  getItems: () => Promise<T[]> | undefined;
  getItemById: (id: string) => T | undefined;
}

export enum SearchType {
  Title = 1,
  Movie = 2,
  Series = 4,
  Name = 8,
  Episode = 16,
  Company = 32,
  Keyword = 64,
  All = 128,
}
