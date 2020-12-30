import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { switchTheme } from "../redux/redux";
import Logo from "../assets/gray-glasses.PNG";
import DarkLogo from "../assets/dark-glasses.PNG";
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
import Assembly1 from "../assets/assembly.PNG";
import Assembly2 from "../assets/assembly2.PNG";
import Assembly3 from "../assets/assembly3.PNG";
import Assembly4 from "../assets/assembly 4.PNG";
import LCS1 from "../assets/lcs1.PNG";
import LCS2 from "../assets/lcs2.PNG";
import LCS3 from "../assets/lcs3.PNG";
import LCS4 from "../assets/lcs4.PNG";
import RTOS1 from "../assets/rtos.PNG";
import RTOS2 from "../assets/rtos2.PNG";
import RTOS3 from "../assets/rtos3.png";
import RTOS4 from "../assets/rtos4.jpg";
import ESP1 from "../assets/esp.jpg";
import ESP2 from "../assets/esp2.PNG";
import ESP3 from "../assets/esp3.PNG";
import ESP4 from "../assets/esp4.jpg";
import ESP5 from "../assets/esp5.PNG";
import ESP6 from "../assets/esp6.jpg";
import Drawer from "./sideComponents/Drawer";
import Navbar from "./sideComponents/Navbar";
import ThemeButton from "./sideComponents/ThemeButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
import GitHubIcon from '@material-ui/icons/GitHub';
import { rotateIn ,swing, zoomIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";
const myFont = require('typeface-montserrat');

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
      position: "relative",
      backgroundColor: dark ? "#09090a" : "#f7f7f7"
    },
    container: {
      backgroundColor: dark ? "#191a1d" : "white",
    },
    drawerIcon: {
      color: dark ? "white" : "#191a1d",
      cursor: "pointer"
    },
    projectTitle: {
      fontSize: isDesktopOrLaptop ? "50px" : "40px",
      fontWeight: "bold",
      fontFamily: myFont,
      color: dark ? "#52bdf1" : "#d52121",
      textAlign: "center",
      padding: "0px",
      marginTop: '30px'
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
      marginTop: "10px"
    },
    imagePresenter: {
      height:isDesktopOrLaptop ? "25em": '10em',
      width: isDesktopOrLaptop ? "45em" : "18em",
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
      fontSize: isDesktopOrLaptop ? "50px": '30px',
      color: dark ? "#52bdf1" : "#d52121",
      cursor: "pointer"
    },
    projectPoster: {
      width: isDesktopOrLaptop ? "45em" : "auto",
      height: isDesktopOrLaptop ? "25em" : "10em",
      borderRadius: "5%",
      border: "10px solid",
      borderColor: dark ? "#52bdf1" : "#d52121"
    },
    separator:{
        width:'auto',
        minHeight:'400px',
        backgroundColor: dark? '#52bdf1':'#d52121',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      },
      descriptionTitle: {
        fontSize: isDesktopOrLaptop ? '50px': '30px',
        fontWeight: 'bold',
        fontFamily:  myFont, 
        color: dark ? "#191a1d" : "#fff",
        textAlign: isDesktopOrLaptop ?  'center' : 'left',
        padding: '50px'
      },
      descriptionBody:{
        fontSize: isDesktopOrLaptop ? '30px': '20px',
        fontWeight: 'bold',
        fontFamily:  myFont, 
        color: dark ? "#191a1d" : "#fff",
        textAlign: 'center',
        padding: isDesktopOrLaptop ? ' 0px 200px 50px': ' 0px 50px 50px',
        width: isDesktopOrLaptop ? '70%': 'auto',
        justifyContent: 'center'
      },
      linkContainer:{
        display: "grid",
      justifyContent: "center",
      paddingBottom: "50px",
      gridTemplateColumns: isDesktopOrLaptop
        ? "auto auto"
        : "auto auto",
      gap: isDesktopOrLaptop ? "80px 80px" : "0px 0px",
      marginBottom: "50px",
      padding: "20px",
      alignItems: "center",
      marginTop: "10px"
      },
      linkLabel:{
        fontSize: isDesktopOrLaptop ? '30px': '20px',
        fontWeight: 'bold',
        fontFamily:  myFont, 
        color: dark? '#52bdf1':'#d52121',
        textAlign: 'center',
        padding: isDesktopOrLaptop ? ' 0px 200px 50px': ' 0px 50px 50px',
        width: isDesktopOrLaptop ? '70%': 'auto',
        justifyContent: 'center'
      },
      link:{
        borderRadius: '50%',
        backgroundColor: dark ? '#191a1d':'#fff',
        padding: '10px',
        fontSize: '50px',
        color: dark? '#52bdf1' : '#d52121',
        cursor: 'pointer'
      }
  };

  const animationStyles = StyleSheet.create({
    shake: {
      ":hover": {
        animationName: rotateIn,
        animationDuration: "1s"
      },
      borderRadius: '50%',
        backgroundColor: dark ? '#191a1d':'#fff',
        padding: '10px',
        fontSize: '50px',
        color: dark? '#52bdf1' : '#d52121',
        cursor: 'pointer'
    },
    logoSwing: {
      ":hover": {
        animationName: swing,
        animationDuration: "1s"
      },
    },
    zoom:{
      borderRadius: "50%",
      backgroundColor: dark ? "#191a1d" : "#fff",
      padding: "10px",
      fontSize: isDesktopOrLaptop ? "50px": '30px',
      color: dark ? "#52bdf1" : "#d52121",
      cursor: "pointer"
    }
  });


  // dummy data instead of Database

  const cinema = {
    title: "Cinema Show Website",
    repo: "Cinema-Show",
    images: [Cinema1, Cinema2, Cinema3, Cinema4, Cinema5, Cinema6],
    description: "Cinema Show website is a Movie and Series rating and review website. it is integrated with TheMovieDB API. The user can interact by liking movie or adding his/her own review, also the user can search for specific movie and watch the movie trailer. Project implemented by Reactjs and Nodejs",
  };

  const aiesec = {
    title: "Aiesec Website",
    repo: "AiesecASUIMFE",
    images: [Aiesec1, Aiesec2, Aiesec3, Aiesec4, Aiesec5],
    description: "Aiesec website is a website developed for Aiesec Student Activity in Ain Shams University . I was in the Frontend team , we worked with Reactjs and Redux, and the Backend team implemented their work by Asp.net"
  };

  const lcs = {
    title: "LCS Algorithm Website",
    repo: "Longest-Common-String-Algorithm",
    images: [LCS1, LCS2, LCS3, LCS4],
    description: "This website is an implementation for Longest Common Subsequence Algorithm , which is an algorithm that works with Dynamic Programming Approach. I impleneted this project for Bioinformatics course as the LCS Algorithm is used to compare two strings and find the longest common subsequence between them and it is used in DNA matching. "
  };

  const assembly = {
    title: "Assembly Compiler & Simulator",
    repo: "Mips-Code-Compiler-and-Simulator",
    images: [Assembly1, Assembly2, Assembly3, Assembly4],
    description: "Mips Code Compiler and Simulator , I implented this project for Computer Architecture Course developed in java to create Desktop app that works as a compiler and simulator for assembly code that works on MIPS Processor, it is one of the most complicated projects I have done as it works with the logic of registers and logic of assembly operations. "
  };

  const rtos = {
    title: "FreeRTOS Traffic System",
    repo: "Mulit-junction-light-control-system",
    images: [RTOS1, RTOS2, RTOS3, RTOS4],
    description: "Traffic Management System is an Embedded system developed in C and FreeRTOS Library and implemented on TivaC Board. It works on managing mulijunction road with pedestrian who want to cross the road and also train that pass by one of these junctions."
  };

  const esp = {
    title: "IOT Door Lock Mobile App",
    repo: "Door-Lock-App",
    images: [ESP1, ESP2, ESP3, ESP4, ESP5,ESP6],
    description: "IOT Door Lock Mobile App is my best project till now as it is an integration between mobile development and embedded systems . I developed the Mobile App in React Native and integrated it with Realtime Database on firebase and on the other side I used arduino and to work with the door lock and I used ESP8266 Module to connect to the internet so that I can read data from firebase , so when the User enters valid password , the app sends value to firebase that the user is confirmed and then the ESP8266 communicates with the arduino that opens the Doorlock."
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
            <img src={dark ? DarkLogo : Logo} alt="logo" width="200px" className={css(animationStyles.logoSwing)} />
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
        <ArrowBackIosIcon fontSize="inherit" className={css(animationStyles.zoom)} onClick={backward} />
        <div style={styles.imagePresenter}>
          <img
            src={project.images[index]}
            alt="poster"
            style={styles.projectPoster}
          />
        </div>
        <ArrowForwardIosIcon fontSize="inherit" className={css(animationStyles.zoom)} onClick={forward} />
      </div>
     
      <div style={styles.separator} >
      <div style={styles.linkContainer}>
      <div style={styles.descriptionTitle}  >
            Brief Description
          </div>
    <a href={"https://github.com/be320/"+project.repo} style={{ textDecoration: "none" }}>
      <GitHubIcon className={css(animationStyles.shake)} fontSize='inherit' />
      </a>
      </div>
          
          <div style={styles.descriptionBody}  >
            {project.description}
          </div>
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
