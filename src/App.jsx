import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-bar.component";



const App = () => {
  console.log("rendering app");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  console.log(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data)
        setFilteredMonsters(data)
      });
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    const newFilteredMonsters = monsters.filter((monster) => 
      monster.name.toLowercase().includes(searchString)
    );
    setFilteredMonsters(newFilteredMonsters);
  };

  return (
    <>
      <SearchBar onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </>
  );
};

export default App;
