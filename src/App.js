import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

class App extends React.Component {
 state = {
  indexOfTheSelectedComponent: "0",
  allDataImages: [
    { name: "collection1_img",
      img: "img",
      visible: true,
      categories: [{
        name: "compaign",
        visible: true,
        content: [
          "img1",
          "img2"
        ]
      },{
        name: "edito",
        visible: true,
        content: [
          "img1",
          "img2"
        ]
      },{
        name: "lookbook",
        visible: false,
        content: [
          "img1",
          "img2"
        ]
      },{
        name: "press",
        visible: false,
        content: [
          "img1",
          "img2"
        ]
      },
      ,{
        name: "information",
        visible: false,
        content: [
          "img1",
          "img2"
        ]
      }
    ]
    },
    { name: "collection2_img",
      type: "img",
      visible: false,
      categories: [{
        name: "compaign",
        visible: true,
        content: [
          "img1",
          "img2"
        ]
      },{
        name: "edito",
        visible: false,
        content: [
          "img1",
          "img2"
        ]
      },{
        name: "lookbook",
        visible: false,
        content: [
          "img1",
          "img2"
        ]
      },
      {
        name: "press",
        visible: false,
        content: [
          "img1",
          "img2"
        ]
      },
      {
        name: "information",
        visible: false,
        content: [
          "img1",
          "img2"
        ]
      }
    ]
    }
  ],
  allDataTexts: [
    { name: "collection1_text",
      type: "img",
      visible: true,
      categories: [{
        name: "information",
        visible: true,
        content: [
          "img1",
          "img2"
        ]
      },{
        name: "pressrelease",
        visible: true,
        content: [
          "img1",
          "img2"
        ]
      },{
        name: "pressrelease2",
        visible: false,
        content: [
          "img1",
          "img2"
        ]
      }]
    },
    { name: "collection1_text",
      type: "img",
      visible: false,
      categories: [{
        name: "information",
        visible: true,
        content: [
          "img1",
          "img2"
        ]
      },{
        name: "pressrelease",
        visible: false,
        content: [
          "img1",
          "img2"
        ]
      },{
        name: "pressrelease2",
        visible: false,
        content: [
          "img1",
          "img2"
        ]
      }]
    }
  ]
  };

 displaySelectedComponentImgs = (e, component) => {

  const indexElement = this.state.allDataImages.indexOf(component);
  let newState = [...this.state.allDataImages];
  newState[indexElement].visible = !newState[indexElement].visible;
  const modifiedListArray = [];
  newState.filter((ele, index) => {
    if(ele.visible === true){
      modifiedListArray.push(ele);
    }
  })
  this.setState({
    allDataImages: newState,
    indexOfTheSelectedComponent: indexElement
  });
 };

 displaySubSelectedComponentImgs = (e, component, index) => {

   console.log(index, "here");

   const indexElement = this.state.allDataImages.indexOf(component);
   let newState = [...this.state.allDataImages];
   newState[this.state.indexOfTheSelectedComponent].categories[index].visible =
   !newState[this.state.indexOfTheSelectedComponent].categories[index].visible;
   this.setState({
     allDataImages: newState
   });
   console.log(this.state.allDataImages, "master state");
 };

 render() {

  const firstLayerButtonsImg = this.state.allDataImages.map((data, index) => {
    return (
        <div key={index}>
         <button onClick={e => this.displaySelectedComponentImgs(e, data, index)}>
          {data.name}
         </button>
         </div>
     )
  })

  const SecondLayerButtonsImg = this.state.allDataImages
  [this.state.indexOfTheSelectedComponent].categories.slice(0,3).map((data, index) => {

    return (
        <div key={index}>
         <button onClick={e => this.displaySubSelectedComponentImgs(e, data, index)}>
          {data.name}
         </button>
         </div>
     )
  })
  const firstLayerButtonsTxts = this.state.allDataImages.map((data, index) => {
    return (
      <div key={index}>
      <button onClick={e => this.displaySelectedComponentImgs(e, data, index)}>
        {data.name}
       </button>
      </div>
     )
  })

  const SecondLayerButtonsTxts = this.state.allDataImages
  [this.state.indexOfTheSelectedComponent].categories.slice(3,6).map((data, index) => {
    return (
        <div key={index}>
        <button onClick={e => this.displaySubSelectedComponentImgs(e, data, index+3)}>
          {data.name}
         </button>
         </div>
     )
  })

  return (
   <div className="App">
   <header>
     <section className="buttons_left">
     <div>{firstLayerButtonsImg}</div>
     <div>{SecondLayerButtonsImg}</div>
     </section>
     <section className="buttons_right">
     <div>{firstLayerButtonsTxts}</div>
     <div>{SecondLayerButtonsTxts}</div>
     </section>
   </header>
   <main>
   </main>

    {this.state.allDataImages.map(component => {
     if (component.visible) {

      const selectedSubType = component.categories.map((ele, index) => {
        if(ele.visible && ele.name === "compaign"){
          return(
            <div key={index}>
            {ele.name}
            </div>
          )
        }if(ele.visible && ele.name === "lookbook"){
            return(
              <div key={index}>
              {ele.name}
              </div>
            )
          }if(ele.visible && ele.name === "edito"){
              return(
                <div key={index}>
                {ele.name}
                </div>
              )
        }if(ele.visible && ele.name === "press"){
          return(
            <div key={index}>
            {ele.name}
            </div>
          )
        }if(ele.visible && ele.name === "information"){
          return(
            <div key={index}>
            {ele.name}
            </div>
          )
        }else{
          return;
        }
      })

      return (
        <div key={Math.random().toString(36).substring(7)} id="test">
            <section>
            <div id="category">
            {component.name}
            </div>
            <div id="sub_category">
            {selectedSubType}
            </div>
            </section>
        </div>
      );
     }
     return null;
    })}
   </div>
  );
 }
}

export default App;
