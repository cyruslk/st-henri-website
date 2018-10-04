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
    }
  })
  this.setState({
    allData: newState
  });
 };


 displaySubSelectedComponent = (e, index, component) => {
   const indexElement = this.state.allData.indexOf(component);
   let newState = [...this.state.allData];
   newState[indexElement].categories[index].visible = !newState[indexElement].categories[index].visible;
   // either this or a filter loop to add and remove these subcomponents to the [];
   // need to be confirmed with M.
   this.setState({
     allData: newState
   });
 };



 render() {
  return (
   <div className="App">
    {this.state.allData.map((data, index) => (

     <div key={index} id="all_buttons_of_cms">
      <button onClick={e => this.displaySelectedComponent(e, data)}>
       {data.name}
      </button>
     </div>
    ))}

    {this.state.allData.map(component => {
      console.log("this is the component", component);
     if (component.visible
      && component.type === "img") {

      const renderButtonSubtypes = component.categories.map((ele, index) => {
        return (
          <div key={index} id="sub_buttons_of_collections">
           <button onClick={e => this.displaySubSelectedComponent(e, index, component)}>
            {ele.name}
           </button>
          </div>
        )

      })

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
        <div key={Math.random().toString(36).substring(7)}>
            <section className="subtypes">
              {renderButtonSubtypes}
            </section>
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
