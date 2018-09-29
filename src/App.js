import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

class App extends React.Component {
 state = {
  allData: [
    { name: "PE18_img",
      status: true,
      subtype: "edito",
      type: "img",
      img: [
        "http://res.cloudinary.com/dm46a3uv9/image/upload/c_scale,h_1000/v1519237872/St-Henri_AH18_Look_9.jpg",
        "http://res.cloudinary.com/dm46a3uv9/image/upload/c_scale,h_1000/v1519237801/St-Henri_AH18_Look_2.jpg"
      ]
    },
   { name: "AH18_img",
    status: false,
    subtype: "lookbook",
    type: "img",
     img: [
       "http://res.cloudinary.com/dm46a3uv9/image/upload/c_scale,h_1000/v1519237801/St-Henri_AH18_Look_2.jpg",
       "http://res.cloudinary.com/dm46a3uv9/image/upload/c_scale,h_1000/v1519237872/St-Henri_AH18_Look_9.jpg",
     ]},
   { name: "AH18_img",
    status: false,
    subtype: "edito",
    type: "img",
   img: [
     "http://res.cloudinary.com/dm46a3uv9/image/upload/c_scale,h_1000/v1519237801/St-Henri_AH18_Look_2.jpg",
     "http://res.cloudinary.com/dm46a3uv9/image/upload/c_scale,h_1000/v1519237872/St-Henri_AH18_Look_9.jpg",
   ]}
  ]
 };

 displaySelected = (e, component) => {

  const indexElement = this.state.allData.indexOf(component);
  let newState = [...this.state.allData];
  newState[indexElement].status = !newState[indexElement].status;
  const modifiedListArray = [];
  newState.filter((ele, index) => {
    if(ele.status === true){
      modifiedListArray.push(ele);
      console.log(ele);
    }
  })
  this.setState({
    allData: newState
  });
 };



 render() {
  return (
   <div className="App">
    {this.state.allData.map((data, index) => (
     <div key={index}>
      <button onClick={e => this.displaySelected(e, data)}>
       {data.name}
      </button>
     </div>
    ))}
    {this.state.allData.map(component => {
     if (component.status
      && component.type === "img"
      && component.subtype === "lookbook") {
      return (
        <div>
        <div>{component.subtype}</div>
        <div>{component.name}</div>
          {component.img.map(img => {
            return (
                  <img src={img} />
            )
          })}
        </div>
      );
     }
     if (component.status
       && component.type === "img"
       && component.subtype === "edito") {
      return (
        <div>
        <div>{component.subtype}</div>
        <div>{component.name}</div>
          {component.img.map(img => {
            return (
              <img src={img} />

            )
          })}
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
