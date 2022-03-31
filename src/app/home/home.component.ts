import {Component, OnDestroy, OnInit} from '@angular/core';
import {first, mergeMap} from 'rxjs/operators';


import {NotificationService} from '../_services/notification.service';
import {UserService} from '../_services/user.service';


@Component({ templateUrl: 'home.component.html' ,

  styleUrls: ['home.component.css']})
export class HomeComponent implements OnInit {





  constructor(

    private notifService: NotificationService,
  ) {}

  ngOnInit() {

      }




}

