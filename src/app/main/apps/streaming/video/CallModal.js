import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TextField, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhoneIcon from '@material-ui/icons/Phone';
import CallEndIcon from '@material-ui/icons/CallEnd';

const useStyles = makeStyles(theme => ({
	root: {
    position: 'absolute',
    width: '400px',
    padding: '20px',
    left: 'calc(50vw - 200px)',
    top: 'calc(50vh - 60px)',
    background: 'linear-gradient(top, #074055 0%, #030D10 100%)',
    borderRadius: '5px',
    textAlign: 'center',
    color: '#00AFF0',
    zIndex: 999,
    animation: `$blinking 3s infinite linear`,
    
      // animation: 'blinking 3s infinite linear',
    
      // '.btn-action:not(.hangup)': {
      //   backgroundColor: 'green',
      // },
  
  },
  callingIcon: {
    // border: 'solid 2px #000000b4',
    color: '#fff',
  },
  "@keyframes blinking": {
    '25%': {
      transform: `scale(0.96)`
    },
    '50%': {
      transform: `scale(1)`
    },
    '75%': {
      transform: `scale(0.96)`
    },
    '100%': {
      transform: `scale(1)`
    },
  }
	
}));

function CallModal({ status, callFrom, startCall, rejectCall }) {

  const classes = useStyles();

  const acceptWithVideo = (video) => {
    const config = { audio: true, video };
    return () => startCall(false, callFrom, config);
  };

  return (
    <>
    {status == 'active' && (
      <div className={clsx(classes.root)}>
        
        <Typography 
          variant="h5"
        >
          {`${callFrom} is calling`}
        </Typography>
  
        <IconButton
          aria-label="button"
          className={clsx(classes.callingIcon, "mx-4 mb-4")}
          onClick={acceptWithVideo(true)}        
          style={{
            backgroundColor: '#7FBA00'
          }}
        >
          <VideocamIcon/>
        </IconButton>
  
        <IconButton
          aria-label="button"
          className={clsx(classes.callingIcon, "mx-4 mb-4")}
          onClick={acceptWithVideo(false)}        
          style={{
            backgroundColor: '#7FBA00'
          }}
        >
          <PhoneIcon />
        </IconButton>      
        <IconButton
          aria-label="button"
          className={clsx(classes.callingIcon, "mx-4 mb-4")}
          onClick={rejectCall}     
          style={{
            backgroundColor: '#E81123'
          }}  
        >
          <CallEndIcon />
        </IconButton>    
      </div>
    )}
    </>
  );
}

CallModal.propTypes = {
  status: PropTypes.string.isRequired,
  callFrom: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired,
  rejectCall: PropTypes.func.isRequired
};

export default CallModal;
