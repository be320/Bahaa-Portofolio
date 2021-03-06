import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { rotateIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";
const myFont = require("typeface-montserrat");

const SocialMedia = ({ dark, isDesktopOrLaptop }) => {
  const styles = {
    socialContainer: {
      height: "25em",
      width: isDesktopOrLaptop ? "30em" : "20em",
      borderRadius: "10%",
      display: "flex",
      flexDirection: "column",
      color: "black",
      backgroundColor: dark ? "#52bdf1" : "#d52121",
      marginTop: "70px",
      marginLeft: isDesktopOrLaptop ? "0px" : "20px",
      marginBottom: "10px"
    },
    socialTitle: {
      fontSize: isDesktopOrLaptop ? "50px" : "40px",
      fontWeight: "bold",
      fontFamily: myFont,
      color: dark ? "#191a1d" : "white",
      textAlign: "center",
      padding: "50px"
    },
    socialBody: {
      display: "grid",
      width: "100%",
      justifyContent: "center",
      gridTemplateColumns: isDesktopOrLaptop
        ? "auto auto auto"
        : "auto auto auto",
      gap: isDesktopOrLaptop ? "80px 80px" : "0px 30px"
    },
    smItem: {
      borderRadius: "50%",
      backgroundColor: dark ? "#191a1d" : "#fff",
      padding: "10px",
      fontSize: "50px",
      color: dark ? "#52bdf1" : "#d52121",
      cursor: "pointer"
    }
  };

  const animationStyles = StyleSheet.create({
    shake: {
      ":hover": {
        animationName: rotateIn,
        animationDuration: "1s"
      },
      borderRadius: "50%",
      backgroundColor: dark ? "#191a1d" : "#fff",
      padding: "10px",
      fontSize: "50px",
      color: dark ? "#52bdf1" : "#d52121",
      cursor: "pointer"
    }
  });

  return (
    <div style={styles.socialContainer}>
      <div style={styles.socialTitle}>Contact me on Social Media</div>
      <div style={styles.socialBody}>
        <a href="https://github.com/be320" style={{ textDecoration: "none" }}>
          <GitHubIcon
            className={css(animationStyles.shake)}
            fontSize="inherit"
          />
        </a>
        <a
          href="https://www.facebook.com/ahmed.bahaa.374"
          style={{ textDecoration: "none" }}
        >
          <FacebookIcon  className={css(animationStyles.shake)} fontSize="inherit" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-bahaa-a79416152/"
          style={{ textDecoration: "none" }}
        >
          <LinkedInIcon  className={css(animationStyles.shake)} fontSize="inherit" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
