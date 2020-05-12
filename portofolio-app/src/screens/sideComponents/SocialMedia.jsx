import React from 'react';

const SocialMedia = ({dark}) => {

    const styles = {

        socialContainer: {
            height:'25em',
            width:'30em',
            borderRadius:'10%',
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
            backgroundColor: dark? '#640dd4':'#d52121',
            marginTop: '50px'
        }

    }

    return(

        <div style={styles.socialContainer} >

        </div>

    );

}

export default SocialMedia;