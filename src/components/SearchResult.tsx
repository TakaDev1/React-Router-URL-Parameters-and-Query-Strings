import React from "react";
import type { SearchResultProps } from "../types/SearchTypes";

const SearchResult = ({ category, sort }: SearchResultProps) => {
  return (
    <div>
      <p>
        Category: {category} / Sort: {sort}
      </p>
    </div>
  );
};

export default SearchResult;
