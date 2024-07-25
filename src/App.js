import style from './App.css'
import img from '../src/asset/pp.jpg'
import html from '../src/asset/html.png'
import vue from '../src/asset/vue.png'
import css from '../src/asset/css.png'
import sql from '../src/asset/sql.png'
import ora from '../src/asset/oracle.png'
import Logo from "../src/logo.svg"
import { Line, Circle } from 'rc-progress';
import CountUp from 'react-countup';
import * as React from "react";
import { useState } from 'react';


function App() {

  const [per, setPer] = useState(88)
  return (
    <>
      <div className="Wrapper">
        <div className="insideWrapper">
          <div className="info">
            <div className='insideInfo'>
              
            </div>
            <div className="sphere">
              <img src={img} />
            </div>
            <div className="name"><h1>MUHAMMAD</h1><h2>MOOSA</h2></div>
            <div className="name2"><h1>WEB</h1><h2>DEVELOPER </h2>
              <div className="line"></div>
            </div>
            <div className="icon"><a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z" />
              <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z" />
            </svg></a></div>
          </div>
          <div className="customMenu">
            <div className="page1">
              <a href="#page2"> <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" fill="#A91D3A" class="bi bi-arrow-down" viewBox="0 0 10 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
              </svg></a>

              {/* INTRO TAB PAGE ONE BARS */}

              {/* FIRST BAR EXPERTISE SECTION FE */}
              <div className="introTab">
                <h1>FRONT-END  </h1>
                <div className="FEicons">
                  <div className='FEone'>
                    <img src={Logo} /><br /><h2>REACT</h2>

                  </div>
                  {/* TWO */}
                  <div className='FEtwo'>
                    <img src={html} /> <br /><h2>HTML 5</h2>
                  </div>
                  {/* THREE */}
                  <div className='FEthree'>
                    <img src={css} /> <br /><h2>CSS 3</h2>
                  </div>
                  {/* FOUR */}
                  <div className='FEfour'>
                    <img src={vue} /> <br /><h2>VUE JS</h2>
                  </div>
                </div>
                {/* FIRST BAR EXPERTISE SECTION FE  END*/}


              </div>
              <div className='introTab2'>
                <h1>BACK-END </h1>
                <div className='FEicons2'>
                  {/* SQL */}
                  <div className='sql'>
                    <img src={sql} />
                  </div>
                  <div className='oracle'>
                    <img src={ora} />
                  </div>
                </div>

              </div>



              {/* PROGRESS BAR START */}
              <div className='performanceBarTabs'>
                <div className='insidePerformanceBar'>

                  <div className='PBone'>

                    <h1>FRONT-END</h1>
                    <div className='insidePBone'>
                      <Circle className='circle' percent={per}
                        trailWidth={"0"}
                        strokeWidth={15}
                        strokeColor="#D3D3D3" />
                      <CountUp start={0} end={88} delay={0} style={{ color: 'white', position: "absolute", top: "120%", left: "70%", fontSize: "35px" }}>
                      </CountUp>

                    </div>
                  </div>
                </div>
              </div>
              {/* PROGRESS BAR END */}



            </div>
            <div id="page2" className="page2"
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className='about' style={{
                width: "100%",
                height: "50vh",

                textAlign: "center",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <h1 style={{ color: "#A91D3A" }}>ABOUT</h1>

                <div className='insideAbout'
                  style={{
                    background: "#151515",
                    width: "80%",
                    height: "40vh",
                    marginLeft: "10%",
                    marginTop: "2.5%"
                  }}>
                  <p>I am a versatile front-end and back-end developer proficient in React and Next.js. With a wealth of programming experience, they have successfully delivered projects as a freelancer.
                     Their passion for coding and problem-solving drives them to create efficient, user-friendly solutions. Whether crafting elegant interfaces or optimizing server-side logic,
                      I brings creativity and expertise to every project.
                      Feel free to adjust this introduction further to highlight any specific achievements or additional details you’d like to emphasize</p>
                </div>
              </div>
            </div>
            <div className="page3"></div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;