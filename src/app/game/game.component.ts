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
  roomId = '';
  startingMinutes = 10;
  time = this.startingMinutes * 60;
  minutes: number = 10;
  seconds: any;

  marginTop: number = 0;
  marginLeft: number = 0;
  movePosition: number = 0;

  // currently using this to tell the rook current location, I'm going to have to a typescript equivalent of Java's substring() in order
  // to get the knight position throughout the game using document.getElementByID("BlackKnight1") since I'm pretty sure that returns
  // the position with "px" and to remove "px" I need something like a substring() method.
  currentX: number = 50;
  currentY: number = 0;

  // knights original posiition
  knight1BlackY:string = "0px";
  knight1BlackX:string = "50px";
  knight2BlackY:string = "0px";
  knight2BlackX:string = "300px";

  // rook original position
  rook1BlackX:string = "0px";
  rook1BlackY:string = "0px";
  rook2BlackX:string = "350px";
  rook2BlackY:string = "0px";

  // bishop original position
  bishop1BlackX:string = "100px";
  bishop1BlackY:string = "0px";
  bishop2BlackX:string = "250px";
  bishop2BlackY:string = "0px";

  // queen and king original position
  queenBlackX:string = "0px";
  queenBlackY:string = "150px";
  kingBlackX:string = "0px";
  kingBlackY:string = "200px";

  // pawns original position
  pawn1BlackX:string = "0px";
  pawn1BlackY:string = "50px";
  pawn2BlackX:string = "50px";
  pawn2BlackY:string = "50px";
  pawn3BlackX:string = "100px";
  pawn3BlackY:string = "50px";
  pawn4BlackX:string = "150px";
  pawn4BlackY:string = "50px";
  pawn5BlackX:string = "200px";
  pawn5BlackY:string = "50px";
  pawn6BlackX:string = "250px";
  pawn6BlackY:string = "50px";
  pawn7BlackX:string = "300px";
  pawn7BlackY:string = "50px";
  pawn8BlackX:string = "350px";
  pawn8BlackY:string = "50px";


  countdownEl = document.getElementById("countdown");

  constructor() {

  }

  ngOnInit(): void {
    this.roomId = window.location.pathname.slice(6)
    console.log(this.roomId)
    setInterval(() => this.updateCountdown(), 1000);
    //this.setUpPieces();
    this.setUpPieces();
    this.knightMove();
  }

  knightMove()
  {
    // A positive value for margin-top makes the pieces move down
    // A positive value for margin-left makes the piece move the right, a negative will make it move to the left
    // 50px for both margin-top and margin-left is equivalent to move one spot
    // A Knight can have up to 8 different types of move
    // I will be using this as reference: https://miro.medium.com/max/1400/1*9EzJvSmfGD1ZonuGAK6buA.png
    // The boundary of hte top of the chessboard is 0px and the bottom is 350px. Left to right is 0px to 350px

    let move1Up: number = this.currentY - 50;
    let canMove1Up: boolean = move1Up >= 0;
    let move2Up: number = this.currentY - 100;
    let canMove2Up: boolean = move2Up >= 0;
    let move1Down: number = this.currentY + 50;
    let canMove1Down: boolean = move1Down <= 350;
    let move2Down: number = this.currentY + 100;
    let canMove2Down: boolean = move2Down <= 350;


    let move1Left: number = this.currentX - 50;
    let canMove1Left: boolean = move1Left >= 0;
    let move2Left: number = this.currentX - 100;
    let canMove2left: boolean = move2Left >= 0;
    let move1Right: number = this.currentX + 50;
    let canMove1Right: boolean = move1Right <= 350;
    let move2Right: number = this.currentX + 100;
    let canMove2Right: boolean = move2Right <= 350;

    // document.getElementById("rook").
    // document.getElementById("BlackKnight1").style.top = "0px";
    // document.getElementById("BlackKnight1").style.left = "50px";

    // let xPos: string = document.getElementById("BlackKnight1").style.top;
    // let yPos: string = document.getElementById("BlackKnight1").style.top;



    // This chooses what move it will make. use the picture of the link I have above as reference what type of it makes
    this.movePosition = 6;
    // Making num1 in image: 2 steps up 1 step to the left
    if ((this.movePosition === 1) && canMove2Up && canMove1Left) {
      //top left

      let newY:string = String(move2Up) + "px";
      let newX:string = String(move1Left) + "px";
      if(!this.isBlackPieceThere(newX, newY))
      {
        document.getElementById("BlackKnight1").style.top = String(move2Up) + "px";
        document.getElementById("BlackKnight1").style.left = String(move1Left) + "px";
      }
    }
    // Making num2 in image: 2 steps up 1 step to the right
    if ((this.movePosition === 2) && canMove2Up && canMove1Right) {

      let newY:string = String(move2Up) + "px";
      let newX:string = String(move1Right) + "px";
      if(!this.isBlackPieceThere(newX, newY))
      {
        document.getElementById("BlackKnight1").style.top = String(move2Up) + "px";
        document.getElementById("BlackKnight1").style.left = String(move1Right) + "px";
      }
    }
    // Making num3 in image: 1 steps up 2 step to the right
    if ((this.movePosition === 3) && canMove1Up && canMove2Right) {

      let newY:string = String(move1Up) + "px";
      let newX:string = String(move2Right) + "px";
      if(!this.isBlackPieceThere(newX, newY))
      {
        document.getElementById("BlackKnight1").style.top = String(move1Up) + "px";
        document.getElementById("BlackKnight1").style.left = String(move2Right) + "px";
      }
    }
    // Making num4 in image: 1 steps down 2 step to the right
    if ((this.movePosition === 4) && canMove1Down && canMove2Right) {
      let newY:string = String(move1Down) + "px";
      let newX:string = String(move2Right) + "px";
      if(!this.isBlackPieceThere(newX, newY))
      {
        document.getElementById("BlackKnight1").style.top = String(move1Down) + "px";
        document.getElementById("BlackKnight1").style.left = String(move2Right) + "px";
      }
    }
    // Making num5 in image: 2 steps down 1 step to the right
    if ((this.movePosition === 5) && canMove2Down && canMove1Right) {
      let newY:string = String(move2Down) + "px";
      let newX:string = String(move1Right) + "px";
      if(!this.isBlackPieceThere(newX, newY))
      {
        document.getElementById("BlackKnight1").style.top = String(move2Down) + "px";
        document.getElementById("BlackKnight1").style.left = String(move1Right) + "px";
      }
    }
    // Making num6 in image: 2 steps down 1 step to the left
    if ((this.movePosition === 6) && canMove2Down && canMove1Left) {

      let newY:string = String(move2Down) + "px";
      let newX:string = String(move1Left) + "px";
      if(!this.isBlackPieceThere(newX, newY))
      {
        document.getElementById("BlackKnight1").style.top = String(move2Down) + "px";
        document.getElementById("BlackKnight1").style.left = String(move1Left) + "px";
      }
    }
    // Making num7 in image: 1 steps down 2 step to the left
    if ((this.movePosition === 7) && canMove1Down && canMove2left) {

      let newY:string = String(move1Down) + "px";
      let newX:string = String(move2Left) + "px";
      if(!this.isBlackPieceThere(newX, newY))
      {
        document.getElementById("BlackKnight1").style.top = String(move1Down) + "px";
        document.getElementById("BlackKnight1").style.left = String(move2Left) + "px";
      }
    }
    // Making num8 in image: 2 steps up 1 step to the left
    if ((this.movePosition === 8) && canMove2Up && canMove1Left) {

      let newY:string = String(move2Up) + "px";
      let newX:string = String(move1Left) + "px";
      if(!this.isBlackPieceThere(newX, newY))
      {
        document.getElementById("BlackKnight1").style.top = String(move2Up) + "px";
        document.getElementById("BlackKnight1").style.left = String(move1Left) + "px";
      }
    }
  }

  isBlackPieceThere(xPosition: string, yPosition: string): boolean
  {
    if((this.pawn1BlackX === xPosition) && (this.pawn1BlackY === yPosition))
    {
      return true;
    }
    if((this.pawn2BlackX === xPosition) && (this.pawn2BlackY === yPosition))
    {
      return true;
    }
    if((this.pawn3BlackX === xPosition) && (this.pawn3BlackY === yPosition))
    {
      return true;
    }
    if((this.pawn4BlackX === xPosition) && (this.pawn4BlackY === yPosition))
    {
      return true;
    }
    if((this.pawn5BlackX === xPosition) && (this.pawn5BlackY === yPosition))
    {
      return true;
    }
    if((this.pawn6BlackX === xPosition) && (this.pawn6BlackY === yPosition))
    {
      return true;
    }
    if((this.pawn7BlackX === xPosition) && (this.pawn7BlackY === yPosition))
    {
      return true;
    }
    if((this.pawn8BlackX === xPosition) && (this.pawn8BlackY === yPosition))
    {
      return true;
    }
    return false;
  }

  isWhitePieceThere(xPosition: string, yPosition: string): boolean
  {
    //Will do later since busy now
    return false;
  }
  setUpPieces()
  {
    document.getElementById("BlackKnight1").style.top = this.knight1BlackY;
    document.getElementById("BlackKnight1").style.left = this.knight1BlackX;
    document.getElementById("BlackPawn1").style.left = this.pawn1BlackX;
    document.getElementById("BlackPawn1").style.top = this.pawn1BlackY;
    document.getElementById("BlackPawn2").style.left = this.pawn2BlackX;
    document.getElementById("BlackPawn2").style.top = this.pawn2BlackY;
    document.getElementById("BlackPawn3").style.left = this.pawn3BlackX;
    document.getElementById("BlackPawn3").style.top = this.pawn3BlackY;
    document.getElementById("BlackPawn4").style.left = this.pawn4BlackX;
    document.getElementById("BlackPawn4").style.top = this.pawn4BlackY;
    document.getElementById("BlackPawn5").style.left = this.pawn5BlackX;
    document.getElementById("BlackPawn5").style.top = this.pawn5BlackY;
    document.getElementById("BlackPawn6").style.left = this.pawn6BlackX;
    document.getElementById("BlackPawn6").style.top = this.pawn6BlackY;
    document.getElementById("BlackPawn7").style.left = this.pawn7BlackX;
    document.getElementById("BlackPawn7").style.top = this.pawn7BlackY;
    document.getElementById("BlackPawn8").style.left = this.pawn8BlackX;
    document.getElementById("BlackPawn8").style.top = this.pawn8BlackY;

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
