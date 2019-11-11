import React from 'react'

const Code3 = function() {
  return (
    <pre><code>{`import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'

const myComponent = function() {

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

  return (
    <ParticleBackground settings={settings}/>
  )
}`}</code></pre>
  )
}

export default Code3
