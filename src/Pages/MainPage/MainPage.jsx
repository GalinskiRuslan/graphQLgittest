import React from "react";
import { useQuery } from "@apollo/client";
import { SEARCH_REPOSITORY } from "../../query/repos";
import { useEffect, useState } from "react";
import RepositoriesList from "../../components/RepositoriesList/RepositoriesList";

function MainPage() {
  const [searchValue, setSearchValue] = useState(" ");
  const { data, loading, error, refetch } = useQuery(SEARCH_REPOSITORY, {
    variables: { query: searchValue },
  });
  useEffect(() => {
    console.log(data, loading, error);
  });
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearchValue(e.target.value);
          refetch();
        }}
        value={searchValue}
      />
      {loading ? (
        <div>loading...</div>
      ) : (
        <RepositoriesList data={data?.search.edges} />
      )}
      <button onClick={() => console.log(searchValue)}>123</button>
    </div>
  );
}

export default MainPage;
