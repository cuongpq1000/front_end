import { Component, OnInit } from '@angular/core';

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

  startingMinutes = 10;
  time = this.startingMinutes * 60;
  minutes: number = 10;
  seconds: any;

  countdownEl = document.getElementById("countdown");

  constructor() {

  }

  ngOnInit(): void {
    setInterval(() => this.updateCountdown(), 1000);
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
