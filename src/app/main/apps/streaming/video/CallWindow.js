import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import PhoneIcon from '@material-ui/icons/Phone';
import CallEndIcon from '@material-ui/icons/CallEnd';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import { TextField, IconButton, Typography } from '@material-ui/core';

const getButtonClass = (icon, enabled) => classnames(`btn-action fa ${icon}`, { disable: !enabled });

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'calc(100vw - 280px)',
    height: 'calc(100vh - 128px)',
    opacity: 1,
    zIndex: 'auto',
    background: "#fff",
    background: 'linear-gradient(top, #074055 0%, #030D10 100%)',
    transition: 'opacity 0.5s',
    animation: 'in-fadeout 3s ease',

  },
  callingIcon: {
    color: '#fff',
  },
    
  'video-control': {
    position: 'absolute',
    bottom: '20px',
    height: '30%',
    width: '100%',
    textAlign: 'center',
    opacity: 0,
    zIndex: 10,
    transition: 'opacity 0.5s',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',

    '&:hover': {
      opacity: 1,
    },
  },

  localVideo: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '20%',
    height: '20%',
  },
    
  peerVideo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  
  '@keyframes in-fadeout': {
    '0%': {opacity: 1},
    '75%': {opacity: 1},
    '100%': {opacity: 0},
  },
}));

function CallWindow({ peerSrc, localSrc, config, mediaDevice, status, endCall }) {

  const classes = useStyles();
  const peerVideo = useRef(null);
  const localVideo = useRef(null);
  const [video, setVideo] = useState(config.video);
  const [audio, setAudio] = useState(config.audio);

  useEffect(() => {
    console.log("it's Video call here => ", status);
    if (peerVideo.current && peerSrc) peerVideo.current.srcObject = peerSrc;
    if (localVideo.current && localSrc) localVideo.current.srcObject = localSrc;
  });

  useEffect(() => {
    if (mediaDevice) {
      mediaDevice.toggle('Video', video);
      mediaDevice.toggle('Audio', audio);
    }
  });

  /**
   * Turn on/off a media device
   * @param {String} deviceType - Type of the device eg: Video, Audio
   */
  const toggleMediaDevice = (deviceType) => {
    if (deviceType === 'video') {
      setVideo(!video);
      mediaDevice.toggle('Video');
    }
    if (deviceType === 'audio') {
      setAudio(!audio);
      mediaDevice.toggle('Audio');
    }
  };

  return (
    <div className={clsx(classes.root)}>
      <video id="peerVideo" className={clsx(classes.peerVideo)} ref={peerVideo} autoPlay />
      <video id="localVideo" className={clsx(classes.localVideo)} ref={localVideo} autoPlay muted />
      <div className={clsx(classes["video-control"])}>
        <IconButton
          aria-label="button"
          className={clsx(classes.callingIcon, "mx-4 mb-4", video)}
          onClick={() => toggleMediaDevice('video')}     
          style={{
            backgroundColor: '#00AFF0'
          }}
        >
          {
            video ? (<VideocamIcon />) : (<VideocamOffIcon/>)
          }
        </IconButton>
        <IconButton
          aria-label="button"
          className={clsx(classes.callingIcon, "mx-4 mb-4", audio)}
          onClick={() => toggleMediaDevice('audio')} 
          style={{
            backgroundColor: '#00AFF0'
          }}
        >
          {
            audio ? (<MicIcon />) : (<MicOffIcon />)
          }   
        </IconButton>
        <IconButton
          aria-label="button"
          className={clsx(classes.callingIcon, "btn-action mx-4 mb-4 hangup")}
          onClick={() => endCall(true)}
          style={{
            backgroundColor: '#E81123'
          }}
        >
          <CallEndIcon />
        </IconButton>
      </div>
    </div>
  );
}

CallWindow.propTypes = {
  status: PropTypes.string.isRequired,
  localSrc: PropTypes.object, // eslint-disable-line
  peerSrc: PropTypes.object, // eslint-disable-line
  config: PropTypes.shape({
    audio: PropTypes.bool.isRequired,
    video: PropTypes.bool.isRequired
  }).isRequired,
  mediaDevice: PropTypes.object, // eslint-disable-line
  endCall: PropTypes.func.isRequired
};

export default CallWindow;
