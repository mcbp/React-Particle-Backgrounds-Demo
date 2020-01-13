import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ParticleBackground from 'react-particle-backgrounds'
import Code1 from './Code1'
import Code2 from './Code2'
import Code3 from './Code3'
import Code4 from './Code4'

function App() {

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "30px",
  }

  const demoStyle= {
    margin: "20px",
    width: "400px",
  }

  const canvasContainer = {
    width: "100%",
    height: "300px"
  }

  const codeStyle = {
    width: "400px",
    height: "300px",
    backgroundColor: "#242423",
    overflowY: "scroll",
    boxSizing: "border-box",
    padding: "5px 10px"
  }

  const bg1 = {background: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"}
  const bg2 = {background: "linear-gradient(0deg, rgba(56,36,36,1) 0%, rgba(238,238,238,1) 100%)"}
  const bg3 = {
    background: "linear-gradient(135deg, #a06cd5 25%, transparent 25%) -50px 0, linear-gradient(225deg, #a06cd5 25%, transparent 25%) -50px 0, linear-gradient(315deg, #a06cd5 25%, transparent 25%), linear-gradient(45deg, #a06cd5 25%, transparent 25%)",
    backgroundSize: "100px 100px",
    backgroundColor: "#6247aa"
  }
  const bg4 = {background: "linear-gradient(0deg, rgba(130,87,39,1) 0%, rgba(2,25,41,1) 100%)"}

  const settings1 = {
    particle: {
      particleCount: 35,
      color: "#9be2ca",
      minSize: 1,
      maxSize: 5
    },
    velocity: {
      minSpeed: 0.2,
      maxSpeed: 0.4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.6,
      opacityTransitionTime: 10000
    }
  }

  const settings2 = {
    particle: {
      particleCount: 150,
      color: "#e3d5d5",
      maxSize: 2
    },
    velocity: {
      directionAngle: 180,
      directionAngleVariance: 60,
      maxSpeed: 0.1
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.4,
      opacityTransitionTime: 10000
    }
  }

  const settings3 = {
    canvas: {
      useBouncyWalls: true
    },
    particle: {
      particleCount: 100,
      color: "#ec173a",
      minSize: 2,
      maxSize: 16
    },
    velocity: {
      minSpeed: 0.2,
      maxSpeed: 1
    },
    opacity: {
      maxOpacity: 1,
    }
  }

  const settings4 = {
    particle: {
      particleCount: 100,
      color: "#d68c38",
      minSize: 2,
      maxSize: 4
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000
    }
  }

  return (
    <div className="App">
      <Header />
      <div style={containerStyle}>
        <div style={demoStyle}>
          <div style={canvasContainer}>
            <ParticleBackground style={bg1} settings={settings1}/>
          </div>
          <div style={codeStyle}>
            <Code1/>
          </div>
        </div>
        <div style={demoStyle}>
          <div style={canvasContainer}>
            <ParticleBackground style={bg2} settings={settings2}/>
          </div>
          <div style={codeStyle}>
            <Code2/>
          </div>
        </div>
        <div style={demoStyle}>
          <div style={canvasContainer}>
            <ParticleBackground style={bg3} settings={settings3}/>
          </div>
          <div style={codeStyle}>
            <Code3/>
          </div>
        </div>
        <div style={demoStyle}>
          <div style={canvasContainer}>
            <ParticleBackground style={bg4} settings={settings4}/>
          </div>
          <div style={codeStyle}>
            <Code4/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
