import React from 'react'

function Footer() {
  return (
    <div style={style.container}>Welcome to Our Mini Pos Api</div>
  )
}

const style = {
  container: {
    backgroundColor: "#7e207eff",
    height: "50px",
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
    left: 0,
    fontSize: "30px",
  },
}

export default Footer