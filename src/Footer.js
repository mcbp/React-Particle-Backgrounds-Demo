import React from 'react'

const Footer = function() {

  const divStyle = {
    position: "fixed",
    bottom: 0,
    backgroundColor: "#242423",
    width: "100%",
    padding: "5px",
    lineHeight: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const iconStyle = {
    fontSize: "20px"
  }

  const textStyle = {
    marginLeft: "5px"
  }

  return (
    <a href="https://github.com/mcbp/React-Particle-Backgrounds-Demo" style={divStyle}>
      <i class="fab fa-github" style={iconStyle}></i>
      <span style={textStyle}>mcbp</span>
    </a>
  )
}

export default Footer
