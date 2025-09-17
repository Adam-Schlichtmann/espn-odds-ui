import { ReactNode } from "react";

export type SortOption<S extends string> = {
  title: S;
  ascending: boolean;
};

export type FilterOption<F extends string> = {
  title: F;
  options: string[];
};

export type UsableListProps<D, S extends string, F extends string> = {
  children: (props: ChildProps<D, S, F>) => ReactNode;
  data: D[];
  defaultSort: SortOption<S>[];
  filterOptions: F[];
  getFilterValue: (title: F) => (datum: D) => string;
  getSearchKeywords: (datum: D) => string;
  getSortValue: (title: S) => (datum: D) => string | number;
  sortOptions: S[];
};

export type ChildProps<D, S extends string, F extends string> = {
  clearSearch: () => void;
  data: D[];
  searchText: string;
  selectedFilterOptions: FilterOption<F>[];
  selectedSortOptions: SortOption<S>[];
};
