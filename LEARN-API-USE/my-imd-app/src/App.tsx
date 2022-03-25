import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { SearchData, SearchResult, SearchType } from "./lib/interfaces";
import { GetList } from "./lib/data";
import { useRef } from "react";

function App() {
  const url = "https://imdb-api.com/en/API/SearchMovie/k_7229lwq6/";
  const searchBox = useRef<HTMLInputElement>(null);

  let search = () => {
    let searchUrl: string = `${url}${searchBox.current?.value}`;
    console.log(searchUrl, searchBox.current?.value);
  };

  // let movies: Promise<SearchData[]> = GetList<SearchData>(searchUrl);
  // console.log("movies", movies);
  return (
    <>
      <section id="info"></section>
      <header>
        <h1>IMDB search</h1>
        <div>
          <label htmlFor="site-search">Search for movies:</label>
          <input ref={searchBox} type="search" id="site-search" name="q" />
          <button onClick={search}>Search</button>
        </div>
      </header>
      <div id="result"></div>
    </>
  );
}

export default App;
