export interface ISearchBarSchema {
  filter: IFilters;
}

export interface IFilters {
  Take: number;
  Filter: string;
}
