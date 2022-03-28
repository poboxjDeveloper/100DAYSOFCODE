import React from "react";
import "./App.css";
import { SearchResult } from "./lib/interfaces";
import SearchDataModel from "./lib/SearchDataModel";
import { useRef } from "react";
// import drive from "./../public/Data/drive.json";

function App() {
  const url = "https://imdb-api.com/en/API/SearchMovie/k_7229lwq6/";
  const searchBox = useRef<HTMLInputElement>(null);

  let search = async () => {
    console.log("start search");
    if (searchBox.current) {
      let value = encodeURIComponent(searchBox.current.value);
      let searchUrl: string = `${url}${value}`;

      console.log(searchUrl, "-> changed to: Data/drive.json");
      searchUrl = "Data/drive.json";

      let sdm: SearchDataModel = new SearchDataModel(searchUrl);
      let results: SearchResult[] = await sdm.getItems();

      if (results && results.length > 0) {
        results.forEach((r) => {
          console.table(r);
        });
      } else {
        console.log("sorry, nothing found.");
      }
    } else {
      console.error("no searchbox found");
    }
  };
  return (
    <>
      <section id="info"></section>
      <header>
        <h1>IMDB search</h1>
        <div>
          <label htmlFor="site-search">Search for movies:</label>
          <input ref={searchBox} type="search" />
          <button onClick={search}>Search</button>
        </div>
      </header>
      <div id="result"></div>
    </>
  );
}

export default App;
