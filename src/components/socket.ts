import { io, Socket } from "socket.io-client";
const ENDPOINT = 'http://localhost:5050/';
// const ENDPOINT = process.env.REACT_APP_END_POINT || 'http://localhost:8080/';

function makeid(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export class SocketConnection {
  private _socket?: Socket;

  get socket(): Socket {
    if (!this._socket) throw new Error("Socket not connected")
    return this._socket;
  }

  connect(cb: () => void) {
    this._socket = io(ENDPOINT);
    let id = localStorage.getItem("user_id");
    if (!id) {
      id = makeid(5)
      localStorage.setItem('user_id', id);
    }
    this.socket.emit('join', { id })
    cb();
  }
}

export const socketConnection = new SocketConnection();

// export const socket = socketConnection.socket;