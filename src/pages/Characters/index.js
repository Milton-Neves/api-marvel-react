import React, { useEffect, useState } from 'react';
import api from "../../services/api";
import CharacterTable from "./CharacterTable"
import Search from './Search';

function Characters() {

  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function onSearch() {
      if (search === "") {
        if (
          localStorage.getItem("fav") === "[]" ||
          !localStorage.getItem("fav")
        ) {
          await api
            .get("/characters")
            .then((response) => {
              setItems(response.data.data.results);
              setLoading(false);
            })
            .catch((err) => console.log(err));
        } else {
          const favor = JSON.parse(localStorage.getItem("favItem"));
          setItems(favor);
        }
      } else {
        await api
          .get(`/characters?nameStartsWith=${search}`)
          .then((response) => {
            setItems(response.data.data.results);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      }
    }
    onSearch();
  }, [search]);

  console.log(items);

  return (
    <div className="container">
      <Search search={(q) => setSearch(q)}></Search>
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}
export default Characters;