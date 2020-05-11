import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../assets/glasses.PNG";
import DarkLogo from "../assets/dark-glasses.PNG";
import ProfileImg from "../assets/profile.jpg";
import DarkBug from "../assets/dark-bug.PNG";
import Bug from "../assets/bug.PNG";
import Drawer from "./sideComponents/Drawer";
import Navbar from "./sideComponents/Navbar";
import ThemeButton from "./sideComponents/ThemeButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";

const Home = () => {
  //Media Query Section

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  //const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  //const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isLandscape = useMediaQuery({ orientation: "landscape" });
  //const isRetina = useMediaQuery({ minResolution: '2dppx' })

  //States Section

  const [dark, setDark] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [MyLogo,setMyLogo] = useState(Logo);

  const handleDark = value => {
    setDark(value);
    setMyLogo(value? DarkLogo:Logo);
  };

  const handleDrawer = () => {
    setShowDrawer(!showDrawer);
  };



  // styling section

  const styles = {
    header: {
      padding: "30px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "20%",
      position: "relative"
    },
    container: {
      backgroundColor: dark ? "#191a1d" : "white"
    },
    drawerIcon: {
      color: dark ? "white" : "#191a1d"
    },
    aboutContainer: {
      display: "flex",
      flexDirection: isDesktopOrLaptop ? "row" : "column",
      padding: isDesktopOrLaptop ? "150px" : "20px",
      justifyContent: isDesktopOrLaptop ? "space-between" : "center",
      alignItems: "center",
      marginTop: isDesktopOrLaptop ? "0px" : "30px"
    },
    aboutDescription: {
      display: "flex",
      flexDirection: "column",
      maxWidth: isDesktopOrLaptop ? "50%" : "100%"
    },
    aboutTitle: {
      color: dark ? "#640dd4" : "#d52121",
      fontSize: isDesktopOrLaptop ? "50px" : "30px",
      fontWeight: "bold",
      fontFamily: "Comic Sans MS"
    },
    aboutBody: {
      color: dark ? "#fff" : "#191a1d",
      fontSize: isDesktopOrLaptop ? "30px" : "20px",
      fontWeight: "bold",
      fontFamily: "Comic Sans MS",
      marginTop: "10px"
    },
    aboutImageContainer: {
      alignItems: "center"
    },
    imageShadow: {
      width: isDesktopOrLaptop ? "31em" : "22em",
      height: isDesktopOrLaptop ? "25em" : "18em",
      backgroundColor: dark ? "#640dd4" : "#d52121",
      marginLeft: isDesktopOrLaptop ? "10px" : "0px",
      marginTop: isDesktopOrLaptop ? "0px" : "150px"
    },
    imageStyle: {
      zIndex: 2,
      position: "absolute",
      padding: isDesktopOrLaptop ? "50px" : "30px",
      marginTop: isDesktopOrLaptop ? "-100px" : "50px",
      marginLeft: isDesktopOrLaptop ? "7px" : "-4px"
    },
    bugContainer: {
      width: "100%",
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: isDesktopOrLaptop ? "0px" : "50px"
    },
    separator:{
      width:'100%',
      minHeight:'400px',
      marginBottom:'50px',
      backgroundColor:'#d52121'
    },
    projectsTitle: {
      fontSize: '50px',
      fontWeight: 'bold',
      fontFamily:  'Comic Sans MS', 
      color: 'white',
      textAlign: 'center',
      padding: '50px'
    }
  };

  // rendering section

  return (
    <div style={styles.container}>
      {isDesktopOrLaptop && (
        <div style={styles.header}>
          <img src={MyLogo} alt="logo" width="200px" />
          <Navbar dark={dark} />
          <ThemeButton dark={dark} handleDark={handleDark} />
        </div>
      )}
      {isTabletOrMobile && (
        <div style={styles.header}>
          <img src={MyLogo} alt="logo" width="110px" />
          <div onClick={handleDrawer}>
            {showDrawer ? (
              <CloseIcon style={styles.drawerIcon} />
            ) : (
              <DehazeIcon style={styles.drawerIcon} />
            )}
          </div>
        </div>
      )}
      {isTabletOrMobile && showDrawer && (
        <Drawer dark={dark} handleDark={handleDark} handleDrawer={handleDrawer} />
      )}
      <div style={styles.aboutContainer} id="about">
        <div style={styles.aboutDescription}>
          <div style={styles.aboutTitle}>Hi, I 'm Ahmed Bahaa.</div>
          <div style={styles.aboutBody}>
            Software Engineering Studnet in Ain Shams University, Egypt. I am
            keen on developing elegant websites with powerful performance.
          </div>
        </div>
        <div style={styles.aboutImageContainer}>
          <div style={styles.imageStyle}>
            <img
              src={ProfileImg}
              alt="Profile"
              width={isDesktopOrLaptop ? "400px" : "300px"}
            />
          </div>
          <div style={styles.imageShadow}></div>
        </div>
      </div>
      <div style={styles.bugContainer}>
        {dark ? (
          <img
            src={DarkBug}
            alt="Bug"
            width={isDesktopOrLaptop ? "600px" : "400px"}
          />
        ) : (
          <img
            src={Bug}
            alt="Bug"
            width={isDesktopOrLaptop ? "600px" : "400px"}
          />
        )}
      </div>
      <div style={styles.separator}>
          <div style={styles.projectsTitle}>
            My Projects
          </div>
          <div style={styles.projectsTitle}>
            My Projects
          </div>
      </div>
    </div>
  );
};

export default Home;