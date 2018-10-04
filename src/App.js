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
        // Here I'll make the other filter
        if(ele.visible === true){
          return(
            <div key={index} id="sub_category_of_collection_rendered">
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
          <div id="category_of_collection">
          {component.name}
          </div>
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
