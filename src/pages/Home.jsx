import React from "react";
import apiImage from "../../img/apiImage.jpg"

function Home() {
  return (
    <>
      <div style={style.container}>
        <h1 style={style.h1}>Welcome to Our HOME Page</h1>
        <img
          src={apiImage}
          alt="API Illustration"
          style={style.image}
        />
      </div>
    </>
  );
}

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  h1: {
    fontSize: "2.5rem",
    color: "#333",
    textAlign: "center",
  },
    image: {
    maxWidth: '400px',
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default Home;
