import Fuse, { type IFuseOptions } from "fuse.js";
import type { ChangeEvent } from "preact/compat";
import { useState } from "preact/hooks";

type Resource = {
  data: {
    name: string;
    url: string;
    image?: string;
  };
};

type SearchProps = {
  searchList: Resource[];
};

const options: IFuseOptions<Resource> = {
  keys: ["data.name", "data.url"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList }: SearchProps) {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);

  function handleOnSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery((e.target as HTMLInputElement).value);
  }

  const resources = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-[#dbe8ed] dark:bg-[#1a2a33] rounded-lg shadow-md">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
        Busqueda
      </label>
      <input
        type="text"
        value={query}
        onChange={handleOnSearch}
        placeholder="Search posts"
        className="w-full px-3 py-2 border border-[#b5c7d3] dark:border-[#223344] rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white dark:bg-[#223344] text-gray-800 dark:text-gray-100 mb-4 placeholder:text-gray-500 dark:placeholder:text-gray-400"
      />
      {query.length > 1 && (
        <p className="mb-2 text-sm text-cyan-700 dark:text-cyan-300">
          Encontrado{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {resources.length}
          </span>{" "}
          {resources.length === 1 ? "resultado" : "resultados"} para '
          <span className="font-semibold">{query}</span>'
        </p>
      )}
      <ul className="space-y-2">
        {resources &&
          resources.map((resource) => (
            <li
              key={resource.data.name}
              className="bg-white dark:bg-[#223344] rounded-md px-3 py-2 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition flex items-center gap-3 border border-[#b5c7d3] dark:border-[#2a3a44]"
            >
              {resource.data.image && (
                <img
                  src={resource.data.image}
                  alt={resource.data.name}
                  className="w-10 h-10 object-cover rounded-md border border-[#b5c7d3] dark:border-[#2a3a44] bg-[#dbe8ed] dark:bg-[#1a2a33]"
                  loading="lazy"
                />
              )}
              <a
                href={`${resource.data.url}`}
                className="text-cyan-700 dark:text-cyan-300 font-medium hover:underline"
              >
                {resource.data.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Search;
