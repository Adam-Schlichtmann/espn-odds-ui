import { FunctionComponent } from "react";

export type SortOption<S extends string> = {
  title: S;
  ascending: boolean;
};

export type FilterOption<F extends string> = {
  title: F;
  options: string[];
};

export type UsableListProps<D, S extends string, F extends string> = {
  children: Awaited<FunctionComponent<ChildProps<D, S, F>>>;
  data: D[];
  filterOptions: F[];
  getFilterValue: (title: F) => (datum: D) => string;
  getSearchKeywords: (datum: D) => string;
  getSortValue: (title: S) => (datum: D) => string | number;
  maxSortDepth?: number;
  sortOptions: S[];
  defaultSort: SortOption<S>[];
};

export type ChildProps<D, S extends string, F extends string> = {
  clearSearch: () => void;
  data: D[];
  searchSubmitted: boolean;
  searchText: string;
  selectedFilterOptions: FilterOption<F>[];
  selectedSortOptions: SortOption<S>[];
};
