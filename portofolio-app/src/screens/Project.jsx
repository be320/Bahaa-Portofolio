import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { switchTheme } from "../redux/redux";
import Logo from "../assets/glasses.PNG";
import DarkLogo from "../assets/blue-glasses.PNG";
import Aiesec1 from "../assets/aiesec1.JPG";
import Aiesec2 from "../assets/aiesec2.JPG";
import Aiesec3 from "../assets/aiesec3.JPG";
import Aiesec4 from "../assets/aiesec4.JPG";
import Aiesec5 from "../assets/aiesec5.JPG";
import Cinema1 from "../assets/cinema1.PNG";
import Cinema2 from "../assets/cinema2.png";
import Cinema3 from "../assets/cinema3.PNG";
import Cinema4 from "../assets/cinema4.PNG";
import Cinema5 from "../assets/cinema5.PNG";
import Cinema6 from "../assets/cinema6.PNG";
import Cinema7 from "../assets/cinema7.PNG";
import Drawer from "./sideComponents/Drawer";
import Navbar from "./sideComponents/Navbar";
import ThemeButton from "./sideComponents/ThemeButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";

const Project = ({ dark, switchTheme }) => {
  //Media Query Section

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isLandscape = useMediaQuery({ orientation: "landscape" });

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
      color: dark ? "white" : "#191a1d",
      cursor: "pointer"
    }
  };

  const aiesecImages = [Aiesec1, Aiesec2, Aiesec3, Aiesec4, Aiesec5];
  const cinemaImages = [
    Cinema1,
    Cinema2,
    Cinema3,
    Cinema4,
    Cinema5,
    Cinema6,
    Cinema7
  ];

  //States Section

  const [showDrawer, setShowDrawer] = useState(false);

  const handleDark = value => {
    switchTheme();
    console.log(dark);
  };

  const handleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div style={styles.container}>
      {isDesktopOrLaptop && (
        <div style={styles.header}>
          <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
            <img src={dark?DarkLogo:Logo} alt="logo" width="200px" />{" "}
          </a>
          <Navbar dark={dark} switchTheme={switchTheme} />
          <ThemeButton dark={dark} handleDark={handleDark} />
        </div>
      )}
      {isTabletOrMobile && (
        <div style={styles.header}>
          <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
            <img src={dark?DarkLogo:Logo} alt="logo" width="110px" />{" "}
          </a>
          <div onClick={handleDrawer}>
            {showDrawer ? (
              <CloseIcon style={styles.drawerIcon} />
            ) : (
              <DehazeIcon style={styles.drawerIcon} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  dark: state.contentReducer.dark
});

const mapDispatchToProps = {
  switchTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
