import React, { Component } from "react";
import DebtForm from "./components/DebtForm";
class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
         <div>
          <DebtForm />
        </div>
       </div>
      </div>
    );
  }
}

export default App;
