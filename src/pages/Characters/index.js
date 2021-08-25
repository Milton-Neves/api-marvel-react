import React, { useEffect } from 'react';
import api from "../../services/api";

function Characters() {  
  useEffect(() => {
    api
      .get(`/characters`,
      )
      .then(response => console.log(response.data.data))
      .catch(err => {
        console.log("ops! ocorreu um erro" + err);
      });
  }, []);
  return <h1>characters</h1>
}
export default Characters;