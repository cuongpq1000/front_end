import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {first, mergeMap} from 'rxjs/operators';
import {io} from 'socket.io-client'
import { uid } from 'uid';


import {NotificationService} from '../_services/notification.service';
import {UserService} from '../_services/user.service';


@Component({ templateUrl: 'home.component.html' ,

  styleUrls: ['home.component.css']})
export class HomeComponent implements OnInit {

  socket;
  @Input() type = 0;

  constructor(

    private notifService: NotificationService,
    public router: Router
  ) {}

  ngOnInit() {
      }
    Link(){
      console.log(this.type);
      this.socket = io('localhost:3030');
      const numb = uid(16);
      this.router.navigate(["game/" + numb])
      this.socket.emit('joinroom', numb);
      this.socket.on("new user", (data) => {
        console.log("New user. Total users: ", data);
      })
    }



}

