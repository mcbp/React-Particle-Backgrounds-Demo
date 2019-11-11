import React from 'react'

const Code2 = function() {
  return (
    <pre><code>{`import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'

const myComponent = function() {

  const settings2 = {
    particle: {
      particleCount: 150,
      color: "#e3d5d5",
      maxSize: 2
    },
    velocity: {
      directionAngle: 180,
      directionAngleVariance: 60,
      minSpeed: 0.1,
      maxSpeed: 0.3
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.4,
      opacityTransitionTime: 10000
    }
  }

  return (
    <ParticleBackground settings={settings}/>
  )
}`}</code></pre>
  )
}

export default Code2
