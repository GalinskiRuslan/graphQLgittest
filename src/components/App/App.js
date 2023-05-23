import "./App.css";
import { useQuery } from "@apollo/client";
import { SEARCH_REPOSITORY } from "../../query/repos";
import { useEffect, useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState(" ");
  const { data, loading, error, refetch } = useQuery(SEARCH_REPOSITORY, {
    variables: { query: searchValue },
  });
  useEffect(() => {
    console.log(data, loading, error);
  });
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setSearchValue(e.target.value);
          refetch();
        }}
        value={searchValue}
      />
      <button onClick={() => console.log(searchValue)}>123</button>
    </div>
  );
}

export default App;
