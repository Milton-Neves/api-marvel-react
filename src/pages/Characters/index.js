import React, { useEffect, useState } from 'react';
import api from "../../services/api";

function Characters() {

  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
        await api
            .get("/characters")
            .then((response) => {
              setItems(response.data.data.results);
              setLoading(false);
            })
            .catch((err) => console.log(err));
        
  }, []);

  console.log(items);

  return (
    <div className="container">
    </div>
  );
}
export default Characters;