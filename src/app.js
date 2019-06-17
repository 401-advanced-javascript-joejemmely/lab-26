import React from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Counter />
        <Footer />
      </>
    );
  }
}

export default App;
