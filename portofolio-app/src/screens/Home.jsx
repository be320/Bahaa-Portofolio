import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../assets/logo.png";
import DarkLogo from "../assets/dark-logo.PNG";
import ProfileImg from "../assets/profile.jpg";
import Drawer from "./sideComponents/Drawer";
import Navbar from "./sideComponents/Navbar";
import ThemeButton from "./sideComponents/ThemeButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from '@material-ui/icons/Close';

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

  const handleDark = value => {
    setDark(value);
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
      height: '20%',
      position: 'relative'
    },
    container: {
      backgroundColor: dark ? "#191a1d" : "white"
    },
    drawerIcon: {
      color: dark ? "white" : "#191a1d"
    },
    aboutContainer: {
        display: 'flex',
        flexDirection: 'row',
        //maxWidth: '40%',
        padding: '150px',
        justifyContent: 'space-between'
    },
    aboutDescription :{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '50%'
    },
    aboutTitle: {
        color: dark ? 'yellow' : '#d52121',
        fontSize: '50px',
        fontWeight: 'bold',
        fontFamily:  'Comic Sans MS', 
    },
    aboutBody:{
        color: dark? '#fff': '#191a1d',
        fontSize: '30px',
        fontWeight: 'bold',
        fontFamily:  'Comic Sans MS', 
        marginTop: '10px'
    },
    aboutImageContainer: {
        alignItems: 'center'
    },
    imageShadow:{
        width:'31em',
        height:'25em',
        backgroundColor: dark? 'yellow': '#d52121',
        alignItems: 'center',
        alignSelf: 'center'

    },
    imageStyle: {
        zIndex:2,
        position:'absolute',
        padding:'50px',
        marginTop: '-100px'
    }
    
  };

  // rendering section

  return (
    <div style={styles.container}>
      {isDesktopOrLaptop && (
        <div style={styles.header}>
          <img src={dark ? DarkLogo : Logo} alt="logo" width="200px" />
          <Navbar dark={dark} />
          <ThemeButton dark={dark} handleDark={handleDark} />
        </div>
      )}
      {isTabletOrMobile && (
        <div style={styles.header}>
          <img src={dark ? DarkLogo : Logo} alt="logo" width="110px" />
          <div onClick={handleDrawer}>
           { showDrawer ?  <CloseIcon style={styles.drawerIcon} />    : <DehazeIcon style={styles.drawerIcon} />   } 
          </div>
        </div>
      )}
      {isTabletOrMobile && showDrawer && (
        <Drawer dark={dark} handleDark={handleDark} />
      )}
      {isDesktopOrLaptop &&  (
        <div style={styles.aboutContainer}>
            <div style={styles.aboutDescription} >
                <div style={styles.aboutTitle}>
                    Hi, I 'm Ahmed Bahaa.
                </div>
                <div style={styles.aboutBody} >  
                    Software Engineering Studnet in Ain Shams University, Egypt. I am keen on developing elegant websites with powerful performance.
                </div>
            </div>
            <div style={styles.aboutImageContainer} >
                <div style={styles.imageStyle} >
                <img src={ProfileImg} alt="Profile" width="400px"  />
                </div>
                <div style={styles.imageShadow}>

                </div>
                
            </div>
        </div>
      )}
    </div>
  );
};

export default Home;
