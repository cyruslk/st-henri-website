import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

class App extends React.Component {
 state = {
  indexOfTheSelectedComponent: "1",
  allDataImages: [
    { name: "collection1_img",
      type: "img",
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
      }]
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
      }]
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

 displaySelectedComponent = (e, component) => {

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



 displaySubSelectedComponentImgs = (e, index, component) => {

   const indexElement = this.state.allDataImages.indexOf(component);
   let newState = [...this.state.allDataImages];
   newState[indexElement].categories[index].visible = !newState[indexElement].categories[index].visible;
   this.setState({
     allDataImages: newState
   });
 };


 render() {

  const firstLayerButtonsImg = this.state.allDataImages.map((data, index) => {
    return (
        <div key={index}>
         <button onClick={e => this.displaySelectedComponent(e, data)}>
          {data.name}
         </button>
         </div>
     )
  })

  const firstLayerButtonsTxts = this.state.allDataTexts.map((data, index) => {
    return (
      <div key={index}>
       <button onClick={e => this.displaySelectedComponent(e, data)}>
        {data.name}
       </button>
      </div>
     )
  })

  const SecondLayerButtonsImg = this.state.allDataImages
  [this.state.indexOfTheSelectedComponent].categories.map((data, index) => {
    return (
        <div key={index}>
         <button onClick={e => this.displaySelectedComponent(e, data)}>
          {data.name}
         </button>
         </div>
     )
  })

  alert(this.state.indexOfTheSelectedComponent)

  return (
   <div className="App">
   <header>
     <section className="buttons_left">
     <div>{firstLayerButtonsImg}</div>
     <div>{SecondLayerButtonsImg}</div>
     </section>
     <section className="buttons_right">
     {firstLayerButtonsTxts}
     </section>
   </header>

    {this.state.allDataImages.map(component => {
     if (component.visible
      && component.type === "img") {

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
