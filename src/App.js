import React from "react";
import Subscribe from "./Subscribe.js"

import "./App.css";


class App extends React.Component {
 state = {
  indexOfTheSelectedComponent: "0",
  allDataImages: [
    { name: "PE18",
      longerName: "Printemps été 2018",
      img: "img",
      visible: true,
      categories: [{
        name: "lookbook",
        visible: true,
        content: [
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
        ]
      },{
        name: "campaign",
        visible: false,
        content: [
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538698538/campaign_1_nnjqga.jpg",
        ]
      },{
        name: "editorial",
        visible: false,
        content: [
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538697531/editorial_1_vis58h.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538697531/editorial_1_vis58h.jpg"
        ]
      },{
        name: "information",
        visible: false,
        content: [
          "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538705060/logo_sh_pjyc4z.svg",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ]
      },
      ,{
        name: "press_release",
        visible: false,
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ]
      }
    ]
    },
    { name: "AH18",
      longerName: "Automne Hiver 2018",
      type: "img",
      visible: false,
      categories: [{
        name: "lookbook",
        visible: true,
        content: [
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538694209/test_img_xv3j6i.jpg",
        ]
      },{
        name: "campaign",
        visible: false,
        content: [
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538698538/campaign_1_nnjqga.jpg"
        ]
      },{
        name: "editorial",
        visible: false,
        content: [
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538697531/editorial_1_vis58h.jpg",
          "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538697531/editorial_1_vis58h.jpg"
        ]
      },
      {
        name: "information",
        visible: false,
        content: [
          "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538705060/logo_sh_pjyc4z.svg",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ]
      },
      {
        name: "press_release",
        visible: false,
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ]
      }
    ]
    }
  ],
  footer: [
    {
      links: [
        {
          name: "contact",
          link: "mailto:info@c-t-l-k.com"
        },
        {
          name: "instagram",
          link: "https://www.instagram.com/sthenrilibrary/"
        },
      ]
    },
    {
      others: [
        {
          name: "rights",
          text: "All rights reserved St-Henri 2017–2019"
        },
        {
          name: "terms",
          text: "TERMS OF USE",
          textPage: [
            {
              title: "Lorem ipsum",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              title: "Lorem ipsum",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              title: "Lorem ipsum",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          ]
        }
      ]
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
         <span onClick={e => this.displaySelectedComponentImgs(e, data, index)}>
          {data.name}
         </span>
         </div>
     )
  })

  const SecondLayerButtonsImg = this.state.allDataImages
  [this.state.indexOfTheSelectedComponent].categories.slice(0,3).map((data, index) => {
    return (
        <div key={index}>
         <span onClick={e => this.displaySubSelectedComponentImgs(e, data, index)}>
          {data.name}
         </span>
         </div>
     )
  })
  const firstLayerButtonsTxts = this.state.allDataImages.map((data, index) => {
    return (
      <div key={index}>
      <span onClick={e => this.displaySelectedComponentImgs(e, data, index)}>
        {data.name}
       </span>
      </div>
     )
  })

  const SecondLayerButtonsTxts = this.state.allDataImages
  [this.state.indexOfTheSelectedComponent].categories.slice(3,6).map((data, index) => {
    return (
        <div key={index}>
        <a onClick={e => this.displaySubSelectedComponentImgs(e, data, index+3)}>
          {data.name}
         </a>
         </div>
     )
  })

  return (

   <div className="App">
    <img className="img_test"
    src="http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538705547/Website-Full-Load_wxv4yy.jpg" />
   <header>
     <section className="header">
      <div>ST-HENRI LIBRARY</div>
     </section>
     <section className="buttons_left">
       <div>IMAGE</div>
       <div className="firstlayer_buttons">{firstLayerButtonsImg}</div>
       <div className="secondlayer_buttons">{SecondLayerButtonsImg}</div>
     </section>
     <section className="buttons_right">
       <div>TEXT</div>
       <div className="firstlayer_buttons_texts">{firstLayerButtonsTxts}</div>
       <div className="secondlayer_buttons">{SecondLayerButtonsTxts}</div>
     </section>
   </header>


    {this.state.allDataImages.map(component => {
     if (component.visible) {

      const selectedSubType = component.categories.map((ele, index) => {
        if(ele.visible && ele.name === "lookbook"){
          return(
            <div key={index} className="components_styling">
            <header>
              <div>
                {component.longerName}
              </div>
              <div>
                {ele.name}
              </div>
            </header>
            <main className="lookbook">
              {ele.content.map((ele, index) => {
                return(
                    <img src={ele} key={index}/>
                )
              })}
            </main>
            </div>
          )
        }if(ele.visible && ele.name === "campaign"){
            return(
              <div key={index} className="components_styling">
              <header>
                <div>
                  {component.longerName}
                </div>
                <div>
                  {ele.name}
                </div>
              </header>
              <main className="campaign">
                {ele.content.map((ele, index) => {
                  return(
                      <img src={ele} key={index}/>
                  )
                })}
              </main>
              </div>
            )
          }if(ele.visible && ele.name === "editorial"){
              return(
                <div key={index} className="components_styling">
                <header>
                  <div>
                    {component.longerName}
                  </div>
                  <div>
                    {ele.name}
                  </div>
                </header>
                <main className="editorial">
                  {ele.content.map((ele, index) => {
                    return(
                        <img src={ele} key={index}/>
                    )
                  })}
                </main>
                </div>
              )
        }if(ele.visible && ele.name === "information"){
          return(
            <div key={index} className="components_styling">
            <main className="information">
              <img src={ele.content[0]} />
              <p>{ele.content[1]}</p>
            </main>
            </div>
          )
        }if(ele.visible && ele.name === "press_release"){
          return(
            <div key={index} className="components_styling">
              <header>
                <div>
                  {component.longerName}
                </div>
                <div>
                  {ele.name}
                </div>
              </header>
              <main className="press_release">
                {ele.content.map((ele, index) => {
                  return(
                      <p key={index}>{ele}</p>
                  )
                })}
              </main>
            </div>
          )
        }else{
          return;
        }
      })

      return (
        <div key={Math.random().toString(36).substring(7)} className="main_content">
          <section>
            {selectedSubType}
          </section>
          <footer>
              <div className="footer_links">
              {this.state.footer[0].links.map((ele, index) => {
                return (
                  <a href={ele.link} key={index} target="_blank">{ele.name}</a>
                )
              })}
              <Subscribe />
              </div>
              <div className="rights_reserved">
                {this.state.footer[1].others[0].text}
                <span>
                  {this.state.footer[1].others[1].text}
                </span>
              </div>
          </footer>
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
