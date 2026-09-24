import React from "react";
import { useLocation, useParams } from "react-router";
import SearchResult from "../components/SearchResult";

const Search = () => {
  const { category } = useParams<"category">();

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const sort = searchParams.get("sort");

  return (
    <div>
      <h2>Search Result</h2>
      <SearchResult category={category ?? "未定義"} sort={sort ?? "未定義"} />
    </div>
  );
};

export default Search;
