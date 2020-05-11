import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../assets/logo.png";
import DarkLogo from "../assets/dark-logo.PNG";
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
      backgroundColor: dark ? "rgba(0,0,0,.87)" : "white"
    },
    drawerIcon: {
      color: dark ? "white" : "black"
    },
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
      {isTabletOrMobile &&  (
        <p>I am Ahmed Bahaadddddddddddddddddddddddddddddddd</p>
      )}
    </div>
  );
};

export default Home;
