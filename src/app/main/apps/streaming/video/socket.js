import io from 'socket.io-client';
import axios from 'axios';

const baseUrl = (axios.defaults.baseURL).slice(0, -1);
const socket = io(baseUrl, {path: "/bridge"});

export default socket;
