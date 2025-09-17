import { ReactNode, useState } from "react";
import { FilterOption, SortOption, UsableListProps } from "./UsableList.types";

const generateFilterOptions = <D, F extends string>(
  data: D[],
  filterOptions: F[],
  getFilterValue: (key: F) => (item: D) => string | null
): FilterOption<F>[] =>
  filterOptions.map<FilterOption<F>>((f) => {
    const options = Array.from(
      new Set(
        data.map((item) => getFilterValue(f)(item)).filter((v) => v != null)
      )
    );
    return { title: f, options };
  });

const UsableList = <D, S extends string, F extends string>({
  children,
  data,
  filterOptions,
  getFilterValue,
  getSearchKeywords,
  getSortValue,
  maxSortDepth = 2,
  sortOptions,
}: UsableListProps<D, S, F>) => {
  const [selectedSortOptions, setSelectedSortOptions] = useState<
    SortOption<S>[]
  >([]);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState<
    FilterOption<F>[]
  >(filterOptions.map((title) => ({ title, options: [] })));
  const [searchText, setSearchText] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  // Filtering
  let filteredData = data.filter((datum) => {
    return selectedFilterOptions.every((filter) => {
      if (!filter.options.length) return true;
      const value = getFilterValue(filter.title)(datum);
      return filter.options.includes(value);
    });
  });

  // Searching
  if (searchSubmitted && searchText.trim()) {
    const keywords = searchText.trim().toLowerCase().split(/\s+/);
    filteredData = filteredData.filter((datum) => {
      const haystack = getSearchKeywords(datum).toLowerCase();
      return keywords.every((kw) => haystack.includes(kw));
    });
  }

  // Sorting
  if (selectedSortOptions.length) {
    filteredData = [...filteredData].sort((a, b) => {
      for (const { title, ascending } of selectedSortOptions) {
        const aValue = getSortValue(title)(a);
        const bValue = getSortValue(title)(b);
        if (aValue < bValue) return ascending ? -1 : 1;
        if (aValue > bValue) return ascending ? 1 : -1;
      }
      return 0;
    });
  }

  // UI for filters
  const handleFilterChange = (title: F, option: string) => {
    setSelectedFilterOptions((prev) =>
      prev.map((f) =>
        f.title === title
          ? {
              ...f,
              options: f.options.includes(option)
                ? f.options.filter((o) => o !== option)
                : [...f.options, option],
            }
          : f
      )
    );
  };

  // UI for search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchSubmitted(true);
  };
  const clearSearch = () => {
    setSearchText("");
    setSearchSubmitted(false);
  };

  // Generate filter options using the utility
  const availableFilterOptions = generateFilterOptions(
    data,
    filterOptions,
    getFilterValue
  );

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          className="px-3 py-2 border rounded w-full"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Search
        </button>
        {searchSubmitted && (
          <button
            type="button"
            onClick={clearSearch}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Clear
          </button>
        )}
      </form>
      {/* Filter Options Section */}
      <div className="mb-4 flex flex-wrap gap-4">
        {availableFilterOptions.map((filter) => (
          <div key={filter.title} className="flex flex-col">
            <span className="font-medium mb-1">{filter.title}</span>
            <div className="flex flex-wrap gap-1">
              {filter.options.map((option) => (
                <label key={option} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={
                      selectedFilterOptions
                        .find((f) => f.title === filter.title)
                        ?.options.includes(option) || false
                    }
                    onChange={() => handleFilterChange(filter.title, option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Sort Options Section */}
      <div className="mb-4 flex flex-wrap items-center gap-6">
        {selectedSortOptions.map(
          (sort, index): ReactNode => (
            <div className="flex items-center gap-2" key={index}>
              <select
                className="px-2 py-1 border rounded"
                value={sort.title || ""}
                onChange={(e) => {
                  const newTitle = e.target.value;
                  setSelectedSortOptions((prev) =>
                    prev
                      .map((item, i) =>
                        index === i
                          ? {
                              title: newTitle as S,
                              ascending: item.ascending ?? true,
                            }
                          : item
                      )
                      .slice(0, maxSortDepth)
                  );
                }}
              >
                {sortOptions.map((title) => (
                  <option
                    key={title}
                    value={title}
                    disabled={
                      index > 0 && selectedSortOptions[1]?.title === title
                    }
                  >
                    {title}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="px-2 py-1 bg-gray-200 rounded flex items-center gap-1"
                onClick={() => {
                  setSelectedSortOptions((prev) =>
                    prev.map((item, i) =>
                      index === i
                        ? { ...item, ascending: !item.ascending }
                        : item
                    )
                  );
                }}
                aria-label="Toggle primary sort direction"
              >
                {selectedSortOptions[0]?.ascending ?? true ? "↑ Asc" : "↓ Desc"}
              </button>
            </div>
          )
        )}
      </div>
      {children({
        clearSearch,
        data: filteredData,
        searchSubmitted,
        searchText,
        selectedFilterOptions,
        selectedSortOptions,
      })}
    </div>
  );
};
export default UsableList;
