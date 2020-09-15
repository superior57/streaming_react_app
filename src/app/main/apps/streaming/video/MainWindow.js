import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, Typography } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhoneIcon from '@material-ui/icons/Phone';



const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		minHeight: '100%',
		position: 'relative',
		flex: '1 1 auto',
		height: 'auto',
    backgroundColor: theme.palette.background.default,
    padding: '50px',
  },
  callingIcon: {
    border: 'solid 2px #000000b4',
    color: '#000000b4',
  }
	
}));

function MainWindow({ startCall, clientId }) {
  const [friendID, setFriendID] = useState(null);
  const classes = useStyles();

  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  const callWithVideo = (video) => {
    const config = { audio: true, video };
    return () => friendID && startCall(true, friendID, config);
  };

  return (
    <div className={clsx(classes.root)}>
      <div className="mb-4">
        <Typography
          variant="subtitle1"
        >
           Your ID :
           <TextField
            // defaultValue={clientId}
            className="mx-4 mb-4"
            value={clientId}
            InputProps={{
              readOnly: true,
            }}
          />
        </Typography>
        
        <Typography
          variant="subtitle1"
        >
           Find Your Friend :
        </Typography>
      </div>
      <div>
        <TextField
          className="mx-4 mb-4"
          placeholder="Your friend ID"
          onChange={(event) => setFriendID(event.target.value)}
          InputProps={{
            spellCheck: false,
          }}
        />
        <div>
          <IconButton 
            aria-label="Video Call" 
            className={clsx(classes.callingIcon, "mx-4 mb-4")}
            onClick={callWithVideo(true)}          
          >
            <VideocamIcon/>
          </IconButton>
          <IconButton
            className={clsx(classes.callingIcon, "mx-4 mb-4")}
            onClick={callWithVideo(false)}
            aria-label="Voice call"
          >
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

MainWindow.propTypes = {
  clientId: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired
};

export default MainWindow;
