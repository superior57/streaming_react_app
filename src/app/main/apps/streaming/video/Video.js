
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import _ from 'lodash';
import socket from './socket';
import PeerConnection from './PeerConnection';
import MainWindow from './MainWindow';
import CallWindow from './CallWindow';
import CallModal from './CallModal';

var pc = {};
// var config = null;

function Video(){

  const [clientId, setClientId] = useState('');
  const [callWindow, setCallWindow] = useState('');
  const [callModal, setCallModal] = useState('');
  const [callFrom, setCallFrom] = useState('');
  const [localSrc, setLocalSrc] = useState(null);
  const [peerSrc, setPeerSrc] = useState(null);

  const [config, setConfig] = useState(null);   
  

  useEffect(() => {
	console.log(
		
	);

	socket
	.on('init', ({ id: clientId }) => {
	//   document.title = `${clientId} - VideoCall`;
	  setClientId(clientId);
	})
	.on('request', ({ from: callFrom }) => {
	  console.log("requesting..");
	  setCallModal('active');
	  setCallFrom(callFrom);
	})
	.on('call', (data) => {
	  console.log("getting start call => ", pc)
	  if (data.sdp) {
		pc.setRemoteDescription(data.sdp);
		if (data.sdp.type === 'offer') pc.createAnswer();
	  } else pc.addIceCandidate(data.candidate);
	})
	.on('end', endCall(false))
	.emit('init');
  }, []);

  const startCallHandler = useCallback((isCaller, friendID, config) => {
	console.log("calling...");
	// config = config;
	setConfig(config);
    pc = new PeerConnection(friendID)
      .on('localStream', (src) => {
        const newState = { callWindow: 'active', localSrc: src};
        if (!isCaller) newState.callModal = '';
		setCallModal(newState.callModal);
		setCallWindow(newState.callWindow);
		setLocalSrc(newState.localSrc);
      })
      .on('peerStream', (src) => setPeerSrc(src))
	  .start(isCaller, config);
	console.log(!_.isEmpty(config));
  });

  const rejectCallHandler = useCallback(() => {
    socket.emit('end', { to: callFrom });
	setCallModal('');
  });

  const endCallHandler = (isStarter) => {
	  endCall(isStarter);
  };

  const endCall = useCallback((isStarter) => {
    if (_.isFunction(pc.stop)) {
      pc.stop(isStarter);
    }
    pc = {};
	// config = null;
	setConfig(null);
	setCallWindow('');
	setCallModal('');
	setLocalSrc(null);
	setPeerSrc(null);
  });

	return (
		<div>
			<MainWindow
				clientId={clientId}
				startCall={startCallHandler}
			/>
			{!_.isEmpty(config) && (
				<CallWindow
				status={callWindow}
				localSrc={localSrc}
				peerSrc={peerSrc}
				config={config}
				// config={{video: true, audio: true}}
				mediaDevice={pc.mediaDevice}
				endCall={endCallHandler}
				/>
			) }
			{
				callModal == 'active' && (
					<CallModal
						status={callModal}
						startCall={startCallHandler}
						rejectCall={rejectCallHandler}
						callFrom={callFrom}
					/>
				)
			}
		</div>
	);
}

export default Video;
