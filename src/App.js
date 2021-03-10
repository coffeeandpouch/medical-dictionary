import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm/SearchForm";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      definition: "",
    };
  }

  render() {
    return (
      <body>
        <main>
          <div className="medhead">
            <h1>Everyday Medical Dictionary</h1>
            <h3>The search tool for physicians use to reference diagnoses</h3>
          </div>
          <div>
            <SearchForm />
          </div>
        </main>
      </body>
    );
    // eslint-disable-next-line no-unreachable
    ReactDOM.render(<App />, document.getElementById("root"));
  }
}
export default App;
