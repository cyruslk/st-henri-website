import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

class App extends React.Component {
 state = {
  allData: [
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
    },
    { name: "collection2_img",
      type: "img",
      visible: false,
      categories: [{
        name: "compaign",
        visible: true,
        content: "content for PE17_img-1"
      },{
        name: "edito",
        visible: false,
        content: "content for PE17_img-2"
      },{
        name: "lookbook",
        visible: false,
        content: "content for PE17_img-3"
      }]
    }
  ]
  };

 displaySelectedComponent = (e, component) => {

  const indexElement = this.state.allData.indexOf(component);
  let newState = [...this.state.allData];
  newState[indexElement].visible = !newState[indexElement].visible;
  const modifiedListArray = [];
  newState.filter((ele, index) => {
    if(ele.visible === true){
      modifiedListArray.push(ele);
      console.log(ele);
    }
  })
  this.setState({
    allData: newState
  });
 };


 displaySubSelectedComponent = (e, index) => {
   console.log("working", index);
 };



 render() {
  return (
   <div className="App">
    {this.state.allData.map((data, index) => (

     <div key={index}>
      <button onClick={e => this.displaySelectedComponent(e, data)}>
       {data.name}
      </button>
     </div>
    ))}

    {this.state.allData.map(component => {
     if (component.visible
      && component.type === "img") {

      const renderButtonSubtypes = component.categories.map((ele, index) => {

        return (
          <div key={index}>
           <button onClick={e => this.displaySubSelectedComponent(e, index)}>
            {ele.name}
           </button>
          </div>
        )

      })

      const selectedSubType = component.categories.map((ele, index) => {
        if(ele.visible === true){
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
        <div>
          <section className="subtypes">
            {renderButtonSubtypes}
          </section>
          <section>
          <div>{component.name}</div>
          {selectedSubType}
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
