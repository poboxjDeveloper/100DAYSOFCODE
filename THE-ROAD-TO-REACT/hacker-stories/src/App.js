import "./App.css";
import ListWithUnstableIndex from "./components/ListWithUnstableIndex";
import ListWithStableIndex from "./components/ListWithStableIndex";
import List from "./components/List";
import Search from "./components/Search";
import GlobalVariableConsumer from "./components/GlobalVariableConsumer";

const title = "this is the title constant";

function getTitle(title) {
  return title;
}

const welcome = {
  greeting: "Hey",
  title: "React from the welcome object",
};

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const stories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "Yet another",
    url: "https://tinehens.be/",
    author: "Tine Hens",
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
];

function App() {
  return (
    <div>
      <h1>
        {welcome.greeting}, {welcome.title}, {getTitle(title)}
      </h1>

      <section>
        <h2>Inline JSX</h2>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />

        <hr />

        {/* <ul>
          {list.map(function (item) {
            return <li>{item.title}</li>;
          })}
        </ul> */}

        <ul>
          {list.map((item) => {
            return <li key={item.objectID}>{item.title}</li>;
          })}
        </ul>

        <ul>
          {list.map(function (item) {
            return (
              <li key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2>List components</h2>
        <ListWithUnstableIndex />
        <ListWithStableIndex />
        <List list={stories} />
      </section>

      <section>
        <h2>Search component</h2>
        <Search />
      </section>

      <section>
        <h2>Tests and development </h2>
        <GlobalVariableConsumer />
      </section>
    </div>
  );
}

export default App;
