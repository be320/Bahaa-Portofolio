import React from "react";

const Navbar = ({ dark }) => {
  const styles = {
    navbarContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "40%",
      height: "20%",
    },
    navbarItem: {
      fontSize: "20px",
      fontWeight: "bold",
      fontFamily: "Comic Sans MS",
      cursor: "pointer",
      borderRadius: "20px",
      padding: "20px",
      alignSelf: "center",
      color: dark ? "white" : "#191a1d",
      backgroundColor: dark ? "#191a1d" : "white"
    }
  };

  const hoverAction = e => {
    e.target.style.backgroundColor = dark ? "#640dd4" : "#d52121";
    e.target.style.color = dark ? "#191a1d" : "#fff";
  };

  const leaveAction = e => {
    e.target.style.backgroundColor = dark ? "#191a1d" : "white";
    e.target.style.color = dark ? "white" : "#191a1d";
  };

  return (
    <div style={styles.navbarContainer}>
      <a href="/" style={{ textDecoration: "none" }}>
        <div
          style={styles.navbarItem}
          onMouseEnter={hoverAction}
          onMouseLeave={leaveAction}
        >
          Home
        </div>
      </a>
      <a href="#projects" style={{ textDecoration: "none" }}>
      <div
        style={styles.navbarItem}
        onMouseEnter={hoverAction}
        onMouseLeave={leaveAction}
      >
        Projects
      </div>
      </a>
      <a href="#contact" style={{ textDecoration: "none" }}>
      <div
        style={styles.navbarItem}
        onMouseEnter={hoverAction}
        onMouseLeave={leaveAction}
      >
        Contact
      </div>
      </a>
    </div>
  );
};

export default Navbar;
