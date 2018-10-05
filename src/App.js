import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

class App extends React.Component {


  constructor(props) {
   super(props);
   this.state = {
    indexOfTheSelectedComponent: "0",
    renderQueue: "",
    allData: [
      {
        collection: 1,
        status: true,
        type: "edito",
        content:
          [
            "img1",
            "img2"
          ]
      },
      {
        collection: 1,
        status: false,
        type: "lookbook",
        content:
          [
            "img1",
            "img2"
          ]
      },
      {
        collection: 1,
        status: false,
        type: "campaign",
        content:
          [
            "img1",
            "img2"
          ]
      },
      {
        collection: 1,
        status: false,
        type: "press_release",
        content:
          [
            "dvfddvdvdf",
            "dvfddvdvdf"
          ]
      },
      {
        collection: 1,
        status: false,
        type: "press",
        content:
          [
            "dvfddvdvdf",
            "dvfddvdvdf"
          ]
      },
      {
        collection: 2,
        status: false,
        type: "edito",
        content:
          [
            "img1",
            "img2"
          ]
      },
      {
        collection: 2,
        status: false,
        type: "lookbook",
        content:
          [
            "img1",
            "img2"
          ]
      },
      {
        collection: 2,
        status: false,
        type: "campaign",
        content:
          [
            "img1",
            "img2"
          ]
      },
      {
        collection: 2,
        status: false,
        type: "press_release",
        content:
          [
            "dvfddvdvdf",
            "dvfddvdvdf"
          ]
      },
      {
        collection: 2,
        status: true,
        type: "press",
        content:
          [
            "dvfddvdvdf",
            "dvfddvdvdf"
          ]
      }
    ]
    };
 }

 componentDidMount(){
   const renderedQueueArray = [];
   const returnRenderQueue = this.state.allData.map((ele, index) => {
     console.log(ele);
     if(ele.status === true){
       renderedQueueArray.push(ele);
     }
   })
   console.log("----", renderedQueueArray);

   this.setState({
     renderQueue: renderedQueueArray
   })
 }

 render() {

  return (
   <div className="App">
   <header>
    --
   </header>
   <main>
   </main>
   </div>
  );
 }
}

export default App;
