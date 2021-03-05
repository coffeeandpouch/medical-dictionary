import React from "react";
import ReactDOM from "react-dom";
import searchForm from "./searchForm/searchForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: [],
      definition: "",
    };
  }
  render() {
    return (
      <html>
        <div className="medhead">
          <h1>Everyday Medical Dictionary</h1>
        </div>
        <div>
          <searchForm />
        </div>
      </html>
    );
    // eslint-disable-next-line no-unreachable
    ReactDOM.render(<App />, document.getElementById("root"));
  }
}
export default App;
