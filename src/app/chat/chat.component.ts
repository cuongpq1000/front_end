import { Component, Input, OnInit } from '@angular/core';
import {io} from 'socket.io-client'


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  socket;
  message: string;
  @Input() roomId = '';

  constructor() { }

  ngOnInit(): void {
    console.log("chat roomid: " + this.roomId);
    this.connection();
  }

  connection(){
    this.socket = io('localhost:3030');
    this.socket.on('message-broadcast', (data: any) => {
      if (data.message !== "" && data.roomId === this.roomId) {
       const element = document.createElement('li');
       element.innerHTML = data.message;
       element.style.background = 'white';
       element.style.padding =  '15px 30px';
       element.style.margin = '10px';
       document.getElementById('message-list').appendChild(element);
       }
     });
  }
  Send() {
    if(this.message !== "" || this.message !== undefined){

      this.socket.emit('message', {message: this.message, roomId: this.roomId});
      const element = document.createElement('li');
      element.innerHTML = this.message;
      element.style.background = 'white';
      element.style.padding =  '15px 30px';
      element.style.margin = '10px';
      element.style.textAlign = 'right';
      document.getElementById('message-list').appendChild(element);
      this.message = '';
    }

 }
}
