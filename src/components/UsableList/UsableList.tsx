import { useState } from "react";
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
  defaultSort,
  filterOptions,
  getFilterValue,
  getSearchKeywords,
  getSortValue,
  maxSortDepth = 2,
  sortOptions,
}: UsableListProps<D, S, F>) => {
  const [selectedSortOptions, setSelectedSortOptions] =
    useState<SortOption<S>[]>(defaultSort);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState<
    FilterOption<F>[]
  >(filterOptions.map((title) => ({ title, options: [] })));
  const [searchText, setSearchText] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
      <form onSubmit={handleSearch} className="mb-4 flex gap-2 items-center">
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
        <button
          type="button"
          className="ml-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
          aria-label="Open filters and sort"
          onClick={() => setModalOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M6.75 12h10.5m-7.5 5.25h4.5"
            />
          </svg>
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

      {/* Modal for filters and sort */}
      {modalOpen && (
        <div className="fixed inset-y-0 right-0 z-50 flex">
          {/* Drawer/Modal only, no overlay */}
          <div
            className="relative bg-white dark:bg-gray-900 shadow-xl h-full w-full sm:w-[400px] sm:ml-auto sm:rounded-l-lg transition-all duration-300 flex flex-col"
            style={{ maxWidth: "100vw" }}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none z-10"
              aria-label="Close filters and sort"
              onClick={() => setModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-6 overflow-y-auto flex-1">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              {/* Filter Options Section */}
              <div className="mb-8 flex flex-wrap gap-4">
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
                            onChange={() =>
                              handleFilterChange(filter.title, option)
                            }
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-4">Sort</h3>
              {/* Sort Options Section as radio group */}
              <div className="mb-4 flex flex-col gap-4">
                <div className="flex flex-col gap-4 text-left">
                  {sortOptions.map((title) => (
                    <label key={title} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="sort-key"
                        value={title}
                        checked={selectedSortOptions[0]?.title === title}
                        onChange={() => {
                          setSelectedSortOptions((prev) => [
                            {
                              title: title as S,
                              ascending: prev[0]?.ascending ?? true,
                            },
                          ]);
                        }}
                      />
                      <p>{title}</p>
                    </label>
                  ))}
                  <button
                    type="button"
                    className="px-2 py-1 bg-gray-200 rounded flex items-center gap-1"
                    onClick={() => {
                      setSelectedSortOptions((prev) => [
                        {
                          ...prev[0],
                          ascending: !(prev[0]?.ascending ?? true),
                        },
                      ]);
                    }}
                    aria-label="Toggle sort direction"
                    disabled={!selectedSortOptions[0]}
                  >
                    {selectedSortOptions[0]?.ascending ?? true
                      ? "↑ Asc"
                      : "↓ Desc"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Render children (list) */}
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
