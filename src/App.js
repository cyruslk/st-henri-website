import React, { Component } from 'react';
import './App.css';
var update = require('immutability-helper');


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: true,
      visibleData: [],
      allTheData: [{name: "component_1", status: true},{name: "component_2", status: false}]
    };
  }

  handleClick = (index, component) => {
    const commentIndex = this.state.allTheData[index];
    var updatedComment = update(commentIndex,
      {status:
        {$set: !commentIndex.status}
      }
    );
    var updatedVisibleData = update(this.state.allTheData, {
       $splice: [[commentIndex, 1, updatedComment]]
    });
    this.setState({
      visibleData: [...this.state.visibleData, component]
    })
    this.setState({
      test: !this.state.test
    })
  }

  render() {


    return (
      <div className="App">
        <header>
        {this.state.allTheData.map((ele, index) => {
          return (
            <button
              key={index}
              onClick={() => this.handleClick(index, ele)}>
              {ele.name}
            </button>
          )
        })}
        </header>
        <main>
          {this.state.visibleData.map((ele, index) => {
            return (
              <div key={index}>
                {ele.name}
              </div>
            )
          })}
        </main>
      </div>
    );
  }
}

export default App;
