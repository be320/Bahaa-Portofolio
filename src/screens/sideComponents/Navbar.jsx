import React from "react";
import { headShake } from "react-animations";
import { StyleSheet, css } from "aphrodite";
const myFont = require('typeface-montserrat');

const Navbar = ({ dark , switchTheme}) => {
  const styles = {
    navbarContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "40%",
      height: "20%",
      backgroundColor: dark ? "#09090a" : "#f7f7f7"
    },
    navbarItem: {
      fontSize: "20px",
      fontWeight: "bold",
      fontFamily: myFont,
      cursor: "pointer",
      borderRadius: "20px",
      padding: "20px",
      alignSelf: "center",
      color: dark ? "white" : "#191a1d",
      backgroundColor: dark ? "#09090a" : "#f7f7f7"
    }
  };

  const animationStyles = StyleSheet.create({
    shake: {
      ":hover": {
        animationName: headShake,
        animationDuration: "1s",
        color: dark? '#52bdf1' : '#d52121',
      },
      fontSize: "30px",
      fontWeight: "bold",
      fontFamily: myFont,
      cursor: "pointer",
      borderRadius: "20px",
      padding: "20px",
      alignSelf: "center",
      color: dark ? "white" : "#191a1d",
      backgroundColor: dark ? "#09090a" : "#f7f7f7"
    },
  });

  const hoverAction = e => {
    e.target.style.backgroundColor = dark ? "#52bdf1" : "#d52121";
    e.target.style.color = dark ? "#191a1d" : "#fff";
  };

  const leaveAction = e => {
    e.target.style.backgroundColor = dark ? "#09090a" : "#f7f7f7"
    e.target.style.color = dark ? "white" : "#191a1d";
  };

  return (
    <div style={styles.navbarContainer}>
      <a href="/" style={{ textDecoration: "none" }}>
        <div
          className={css(animationStyles.shake)}
          onMouseEnter={hoverAction}
          onMouseLeave={leaveAction}
        >
          Home
        </div>
      </a>
      <a href="/#projects" style={{ textDecoration: "none" }}>
      <div
       className={css(animationStyles.shake)}
        onMouseEnter={hoverAction}
        onMouseLeave={leaveAction}
      >
        Projects
      </div>
      </a>
      <a href="/#contact" style={{ textDecoration: "none" }}>
      <div
        className={css(animationStyles.shake)}
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
