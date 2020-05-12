import React from 'react';

const ProjectCard = ({poster,title,isDesktopOrLaptop}) => {

    const styles = {

        cardContainer:{
            height:'auto',
            borderRadius:'10%',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            color: 'white',
        },
        projectPoster:{
            width:isDesktopOrLaptop? '35em' : 'auto',
            height: isDesktopOrLaptop? '18em': '10em',
            borderRadius:'5%',
            border: '3px solid gray',
        },
        projectTitleContainer:{
            backgroundColor: 'rgba(0,0,0,0.6)',
            width:isDesktopOrLaptop? 'auto' : 'auto',
            zIndex: 2,
            marginTop: isDesktopOrLaptop? '-100px': '-50px',
            borderRadius:'10%',
            height: isDesktopOrLaptop? '100px': '50px',
        },
        projectTitle:{
            padding: isDesktopOrLaptop? '0px 20px' : '0px 20px',
            marginTop: isDesktopOrLaptop? '0px': '0px',
            fontSize: '25px',
            fontWeight: 'bold',
            fontFamily:  'Comic Sans MS', 
            zIndex: 4,
            
        },
    }



    return(
        <div style={styles.cardContainer}  >
        <img src={poster} alt="poster" style={styles.projectPoster} />
        <div style={styles.projectTitleContainer} >
       <p style={styles.projectTitle} > {title} </p>
        </div>
        </div>
    );
    
}

export default ProjectCard;