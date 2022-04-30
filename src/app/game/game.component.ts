import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  hide = true;
  loading = false;
  submitted = false;
  error = '';
  messageList: string[] = [];

  startingMinutes = 10;
  time = this.startingMinutes * 60;
  minutes: number = 10;
  seconds: any;
  message: string;

  countdownEl = document.getElementById("countdown");

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    setInterval(() => this.updateCountdown(), 1000);
    if(this.time == 0){
      this.router.navigate(['/']);
    }
  }

  updateCountdown()
  {
    this.minutes = Math.floor(this.time / 60);
    this.seconds = this.time % 60;

    this.seconds = this.seconds < 10 ? '0' + this.seconds: this.seconds;

    // this.countdownEl. = '$s{minutes}: ${seconds}';
    this.time--;
  }





}
