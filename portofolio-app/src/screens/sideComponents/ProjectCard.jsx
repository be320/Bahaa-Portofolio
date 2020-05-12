import React from 'react';

const ProjectCard = ({dark,poster,title,isDesktopOrLaptop}) => {

    const styles = {

        cardContainer:{
            height:'auto',
            borderRadius:'10%'
        },
        projectPoster:{
            width:isDesktopOrLaptop? '35em' : '20em',
            height: isDesktopOrLaptop? '18em': '10em',
            borderRadius:'5%',
            border: '3px solid gray',
        }

    }

    return(
        <div style={styles.cardContainer}>
        <img src={poster} alt="poster" style={styles.projectPoster} />
        </div>
    );
    
}

export default ProjectCard;