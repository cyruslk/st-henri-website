import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

class App extends React.Component {
 state = {
  indexOfTheSelectedComponent: "0",
  allDataImages: [
    {
      collection: 1,
      type: "edito",
      content:
        [
          "img1",
          "img2"
        ]
    },
    {
      collection: 1,
      type: "lookbook",
      content:
        [
          "img1",
          "img2"
        ]
    },
    {
      collection: 1,
      type: "campaign",
      content:
        [
          "img1",
          "img2"
        ]
    },
    {
      collection: 1,
      type: "press_release",
      content:
        [
          "dvfddvdvdf",
          "dvfddvdvdf"
        ]
    },
    {
      collection: 1,
      type: "press",
      content:
        [
          "dvfddvdvdf",
          "dvfddvdvdf"
        ]
    },
    {
      collection: 2,
      type: "edito",
      content:
        [
          "img1",
          "img2"
        ]
    },
    {
      collection: 2,
      type: "lookbook",
      content:
        [
          "img1",
          "img2"
        ]
    },
    {
      collection: 2,
      type: "campaign",
      content:
        [
          "img1",
          "img2"
        ]
    },
    {
      collection: 2,
      type: "press_release",
      content:
        [
          "dvfddvdvdf",
          "dvfddvdvdf"
        ]
    },
    {
      collection: 2,
      type: "press",
      content:
        [
          "dvfddvdvdf",
          "dvfddvdvdf"
        ]
    }
  ]
  };


 render() {
  return (
   <div className="App">
   <header>

   </header>
   <main>
   </main>
   </div>
  );
 }
}

export default App;
