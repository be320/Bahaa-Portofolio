import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../assets/glasses.PNG";
import DarkLogo from "../assets/blue-glasses.PNG";
import ProfileImg from "../assets/profile.jpg";
import DarkBug from "../assets/blue-bug.PNG";
import Bug from "../assets/bug.PNG";
import Contacts from "../assets/contacts.PNG";
import DarkContacts from "../assets/blue-contacts.PNG";
import Drawer from "./sideComponents/Drawer";
import Navbar from "./sideComponents/Navbar";
import EmailForm from "./sideComponents/EmailForm";
import SocialMedia from "./sideComponents/SocialMedia";
import ThemeButton from "./sideComponents/ThemeButton";
import ProjectCard from './sideComponents/ProjectCard';
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
import CinemaShow from '../assets/cinemaShow.png';
import Aiesec from "../assets/aiesec.JPG";
import LCS from "../assets/lcs.png";
import Assembly from "../assets/assembly.PNG";
import RTOS from "../assets/rtos.PNG";
import ESP from "../assets/esp.jpg";
import { connect } from 'react-redux';
import { switchTheme } from '../redux/redux';

const Home = ({dark,switchTheme}) => {
  //Media Query Section

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isLandscape = useMediaQuery({ orientation: "landscape" });

  //States Section

  const [showDrawer, setShowDrawer] = useState(false);

  const handleDark = value => {
    switchTheme();
    console.log(dark)
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
      color: dark ? "white" : "#191a1d",
      cursor: 'pointer'
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
      maxWidth: isDesktopOrLaptop ? "50%" : "100%",
      justifyContent: 'center'
    },
    aboutTitle: {
      color: dark ? "#52bdf1" : "#d52121",
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
      backgroundColor: dark ? "#52bdf1" : "#d52121",
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
      backgroundColor: dark? '#52bdf1':'#d52121',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    projectsTitle: {
      fontSize: isDesktopOrLaptop ? '50px': '40px',
      fontWeight: 'bold',
      fontFamily:  'Comic Sans MS', 
      color: 'white',
      textAlign: 'center',
      padding: '50px'
    },
    projectsBody:{
      fontSize: isDesktopOrLaptop ? '30px': '20px',
      fontWeight: 'bold',
      fontFamily:  'Comic Sans MS', 
      color: 'white',
      textAlign: 'center',
      padding: isDesktopOrLaptop ? ' 0px 200px 50px': ' 0px 50px 50px',
      width: isDesktopOrLaptop ? '70%': 'auto',
      justifyContent: 'center'
    },
    projectsCollection:{
      display: 'grid',
      justifyContent: 'center',
      paddingBottom: '50px',
      gridTemplateColumns: isDesktopOrLaptop ? 'auto auto': 'auto',
      gap: isDesktopOrLaptop ? '80px 80px': '80px 0px',
      marginBottom: '50px',
      padding: '20px'
    },
    contactsContainer:{
      display: 'grid',
      width:'100%',
      minHeight:'550px',
      // backgroundColor: dark? '#640dd4':'#d52121',
      justifyContent: 'space-around',
      gridTemplateColumns: isDesktopOrLaptop ? 'auto auto': 'auto',
      gap: isDesktopOrLaptop ? '80px 80px': '0px 80px',
    }
  };

  // rendering section

  return (
    <div style={styles.container}>
      {isDesktopOrLaptop && (
        <div style={styles.header}>
        <a href="/" style={{ textDecoration: "none", cursor: 'pointer' }}>
         <img src={dark?DarkLogo:Logo} alt="logo" width="200px" /> </a>
          <Navbar dark={dark} switchTheme={switchTheme} />
          <ThemeButton dark={dark} handleDark={handleDark} />
        </div>
      )}
      {isTabletOrMobile && (
        <div style={styles.header}>
        <a href="/" style={{ textDecoration: "none", cursor: 'pointer' }}>
          <img src={dark?DarkLogo:Logo} alt="logo" width="110px" /> </a>
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
      <div style={styles.bugContainer} id="projects" >
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
      <div style={styles.separator} >
          <div style={styles.projectsTitle}  >
            My Projects
          </div>
          <div style={styles.projectsBody}  >
            This is a mini collection for my Projects , it is a mix between Computer Engineering Projects and Web Development Projects.
          </div>
      </div>
      <div style={styles.projectsCollection} >
      <a href="/project/1" style={{ textDecoration: "none" }}>
          <ProjectCard poster={CinemaShow} isDesktopOrLaptop={isDesktopOrLaptop} title="Cinema Show Website" dark={dark} />
          </a>
          <ProjectCard poster={Aiesec} isDesktopOrLaptop={isDesktopOrLaptop} title="Aiesec Website" dark={dark} />
          <ProjectCard poster={LCS} isDesktopOrLaptop={isDesktopOrLaptop} title="LCS Algorithm Website" dark={dark}  />
          <ProjectCard poster={Assembly} isDesktopOrLaptop={isDesktopOrLaptop}  title="Assembly Compiler & Simulator" dark={dark}  />
          <ProjectCard poster={RTOS} isDesktopOrLaptop={isDesktopOrLaptop}  title="FreeRTOS Traffic System" dark={dark} />
          <ProjectCard poster={ESP} isDesktopOrLaptop={isDesktopOrLaptop}  title="Embedded Door Lock Mobile App" dark={dark} />
      </div>
      <div style={styles.bugContainer} id="contact" >
        {dark ? (
          <img
            src={DarkContacts}
            alt="Contacts"
            width={isDesktopOrLaptop ? "600px" : "400px"}
          />
        ) : (
          <img
            src={Contacts}
            alt="Contacts"
            width={isDesktopOrLaptop ? "600px" : "400px"}
          />
        )}
      </div>
      <div style={styles.contactsContainer} >
          <EmailForm  dark={dark} isDesktopOrLaptop={isDesktopOrLaptop} />
          <SocialMedia dark={dark} isDesktopOrLaptop={isDesktopOrLaptop} />
      </div>
    </div>
  );
};

function mapStateToProps (state) {
 console.log(state)
  return { dark: state.contentReducer.dark }
}

const mapDispatchToProps = {
    switchTheme
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);