import React, { useState, useEffect } from "react";
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
import Cinema1 from "../assets/cinema1.png";
import Cinema2 from "../assets/cinema2.png";
import Cinema3 from "../assets/cinema3.png";
import Cinema4 from "../assets/cinema4.png";
import Cinema5 from "../assets/cinema5.png";
import Cinema6 from "../assets/cinema6.png";
import Drawer from "./sideComponents/Drawer";
import Navbar from "./sideComponents/Navbar";
import ThemeButton from "./sideComponents/ThemeButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";

const Project = ({ dark, switchTheme, match }) => {
  //Media Query Section

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

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
    },
    projectTitle: {
      fontSize: isDesktopOrLaptop ? "50px" : "40px",
      fontWeight: "bold",
      fontFamily: "Comic Sans MS",
      color: dark ? "#52bdf1" : "#d52121",
      textAlign: "center",
      padding: "0px"
    },
    imagesContainer: {
      display: "grid",
      justifyContent: "center",
      paddingBottom: "50px",
      gridTemplateColumns: isDesktopOrLaptop
        ? "auto auto auto"
        : "auto auto auto",
      gap: isDesktopOrLaptop ? "80px 80px" : "80px 0px",
      marginBottom: "50px",
      padding: "20px",
      alignItems: "center",
      marginTop: "50px"
    },
    imagePresenter: {
      height: "25em",
      width: isDesktopOrLaptop ? "45em" : "20em",
      borderRadius: "10%",
      display: "flex",
      flexDirection: "column",
      color: "black",
      backgroundColor: dark ? "#52bdf1" : "#d52121"
    },
    arrow: {
      borderRadius: "50%",
      backgroundColor: dark ? "#191a1d" : "#fff",
      padding: "10px",
      fontSize: "50px",
      color: dark ? "#52bdf1" : "#d52121",
      cursor: "pointer"
    },
    projectPoster: {
      width: isDesktopOrLaptop ? "45em" : "auto",
      height: isDesktopOrLaptop ? "25em" : "10em",
      borderRadius: "5%",
      border: "10px solid",
      borderColor: dark ? "#52bdf1" : "#d52121"
    }
  };

  // dummy data instead of Database

  const cinema = {
    title: "Cinema Show Website",
    images: [Cinema1, Cinema2, Cinema3, Cinema4, Cinema5, Cinema6]
  };

  const aiesec = {
    title: "Aiesec Website",
    images: [Aiesec1, Aiesec2, Aiesec3, Aiesec4, Aiesec5]
  };

  const lcs = {
    title: "LCS Algorithm Website",
    images: [Aiesec1, Aiesec2, Aiesec3, Aiesec4, Aiesec5]
  };

  const assembly = {
    title: "Assembly Compiler & Simulator",
    images: [Aiesec1, Aiesec2, Aiesec3, Aiesec4, Aiesec5]
  };

  const rtos = {
    title: "FreeRTOS Traffic System",
    images: [Aiesec1, Aiesec2, Aiesec3, Aiesec4, Aiesec5]
  };

  const esp = {
    title: "Embedded Door Lock Mobile App",
    images: [Aiesec1, Aiesec2, Aiesec3, Aiesec4, Aiesec5]
  };

  //States Section

  const [showDrawer, setShowDrawer] = useState(false);
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(0);
  const [project, setProject] = useState(aiesec);


  useEffect(() => {

    init();
    
  },[]);

  const init = () => {
      let temp = match.params.id;
    switch (temp) {
        case '1':
          console.log('i am here')  
          setProject(cinema);  
          setSize(cinema.images.length);
          break;
        case '2':
          setProject(aiesec); 
          setSize(aiesec.images.length);
          break;
        case '3':
          setProject(lcs);    
          setSize(lcs.images.length);
          break;
        case '4':
          setProject(assembly); 
          setSize(assembly.images.length);
          break;
        case '5':
          setProject(rtos); 
          setSize(rtos.images.length);
          break;
        case '6':
          setProject(esp); 
          setSize(esp.images.length);
          break;
  
        default:
          break;
      }
  }

  const handleDark = value => {
    switchTheme();
    console.log(dark);
  };

  const handleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const forward = () =>{
    let temp = index;
    if(temp === size-1)
    setIndex(0);
    else
    setIndex(temp+1);
  }

  const backward = () => {
    let temp = index;
    if(temp === 0)
    setIndex(size-1);
    else
    setIndex(temp-1);
  }

  return (
    <div style={styles.container}>
      {isDesktopOrLaptop && (
        <div style={styles.header}>
          <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
            <img src={dark ? DarkLogo : Logo} alt="logo" width="200px" />{" "}
          </a>
          <Navbar dark={dark} switchTheme={switchTheme} />
          <ThemeButton dark={dark} handleDark={handleDark} />
        </div>
      )}
      {isTabletOrMobile && (
        <div style={styles.header}>
          <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
            <img src={dark ? DarkLogo : Logo} alt="logo" width="110px" />{" "}
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
      {isTabletOrMobile && showDrawer && (
        <Drawer
          dark={dark}
          handleDark={handleDark}
          handleDrawer={handleDrawer}
        />
      )}
      <div style={styles.projectTitle}>{project.title}</div>
      <div style={styles.imagesContainer}>
        <ArrowBackIosIcon fontSize="inherit" style={styles.arrow} onClick={backward} />
        <div style={styles.imagePresenter}>
          <img
            src={project.images[index]}
            alt="poster"
            style={styles.projectPoster}
          />
        </div>
        <ArrowForwardIosIcon fontSize="inherit" style={styles.arrow} onClick={forward} />
      </div>
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
