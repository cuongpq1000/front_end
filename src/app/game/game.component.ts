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
    this.makeChessBoard();
  }


  updateCountdown()
  {
    this.minutes = Math.floor(this.time / 60);
    this.seconds = this.time % 60;

    this.seconds = this.seconds < 10 ? '0' + this.seconds: this.seconds;

    // this.countdownEl. = '$s{minutes}: ${seconds}';
    this.time--;
  }

  makeChessBoard()
  {
    let chessBoardID = <HTMLCanvasElement> document.getElementById("chessBoard")!
    // chessBoardID.width = 560;
    // chessBoardID.height = 560;

    let chessSquareLength = 70;
    let halfSquare = chessSquareLength / 2;
    let chessBoardSize = 560;
    let dpi = window.devicePixelRatio;
    let style_height = +getComputedStyle(chessBoardID).getPropertyValue("height").slice(0, -2);
//get CSS width
    let style_width = +getComputedStyle(chessBoardID).getPropertyValue("width").slice(0, -2);
//scale the canvas
    chessBoardID.setAttribute('height', style_height * dpi+"");
    chessBoardID.setAttribute('width', style_width * dpi+"");
    let chessBoardContext = chessBoardID.getContext("2d")!

    let rook = new Path2D("m111.54 124.05c0 1.5492-1.0758 2.3238-3.2275 2.3238-2.4099 0-3.6148-0.77459-3.6148-2.3238 0-7.1435-2.3668-12.953-7.1005-17.428-4.2173-3.7869-8.3054-5.6804-12.264-5.6804-5.8525 0-9.5104 2.3238-10.973 6.9714l-0.5164 3.4857v0.2582c0 3.4426 2.539 8.2194 7.6169 14.33 1.3771 1.5492 2.539 2.7541 3.4857 3.6148 1.3771 1.1188 3.6578 1.6783 6.8423 1.6783 3.3566 0 8.7788-0.6455 16.267-1.9365 7.5739 1.291 13.039 1.9365 16.396 1.9365 3.2705 0 5.5513-0.55943 6.8423-1.6783 3.6148-3.1845 6.6271-7.0575 9.037-11.619 1.3771-2.582 2.0656-4.6906 2.0656-6.3259 0-5.4222-2.4529-8.8218-7.3587-10.199-1.291-0.34427-2.6681-0.51641-4.1312-0.51641-3.959 0-8.0042 1.9365-12.135 5.8095-4.8197 4.3033-7.2296 10.07-7.2296 17.299m28.015-12.394c0 3.4426-2.3668 7.4878-7.1005 12.135l-3.3566 2.8402-1.291 0.77458c-1.6353 0.2582-3.3566 0.3873-5.164 0.3873-5.3361 0-8.0042-1.0758-8.0042-3.2275 0.17213-6.6271 2.1517-11.791 5.9386-15.492 3.2705-3.2706 6.6271-4.9058 10.07-4.9058 4.3894 0 7.1866 1.5922 8.3915 4.7767l0.51641 2.7111m-12.264 32.791c0-2.2377-6.3259-3.3566-18.978-3.3566-3.4427 0-6.498 0.12909-9.1661 0.3873l-3.0984 0.2582c-4.6476 0.60247-6.9714 1.4631-6.9714 2.582 0 1.291 1.1619 1.9365 3.4857 1.9365l15.621-1.291 15.492 1.291c2.4098 0 3.6148-0.60246 3.6148-1.8074m7.2296 3.0984c-0.17214 5.8525-8.9509 8.7788-26.336 8.7788-17.213 0-25.949-2.9263-26.207-8.7788-0.08607-5.5083-0.9037-10.414-2.4529-14.717-0.94673-2.3238-2.7541-5.2931-5.4222-8.9079-3.3566-4.5615-5.0349-8.6067-5.0349-12.135 0-5.5083 2.3668-9.7686 7.1005-12.781 2.6681-1.7213 5.6374-2.582 8.9079-2.582 4.4755 0 8.7358 1.6353 12.781 4.9058 0-3.9591 0.3873-6.6702 1.1619-8.1333 0.60246-1.6353 2.582-3.6148 5.9386-5.9386v-2.9693l-5.2931-3.2275v-4.6476h4.7767l1.5492-4.7767h4.3894l1.6783 4.7767h4.6476v4.6476l-5.164 3.2275v2.9693c3.2705 2.4099 5.2931 4.4755 6.0677 6.1968l0.9037 3.7439c0.08608 1.0328 0.17214 2.4099 0.2582 4.1312 4.0451-3.2705 8.2194-4.9058 12.523-4.9058 5.7664 0 10.242 2.1947 13.426 6.5841 1.8074 2.582 2.7111 5.5083 2.7111 8.7788 0 3.5287-1.6783 7.6169-5.0349 12.264l-2.9693 4.1312c-3.1844 4.8197-4.8197 11.275-4.9058 19.365m-57.708-35.89c0-3.6148 1.8074-5.9386 5.4222-6.9714 1.0328-0.34428 2.1086-0.51641 3.2275-0.51641 3.6148 0 7.0575 1.6353 10.328 4.9058 3.7009 3.7869 5.6374 8.9509 5.8095 15.492 0.08607 1.8935-1.8935 2.9693-5.9386 3.2275h-1.9365c-1.7213 0-3.4857-0.1291-5.2931-0.3873-2.8402-1.3771-5.6804-4.0882-8.5206-8.1333-2.0656-3.0123-3.0984-5.5513-3.0984-7.6169");
    for(let i = 0; i < 8; i++)
    {
      for(let j = 0; j < 8; j++)
      {
        chessBoardContext.moveTo(0, chessSquareLength * j);
        chessBoardContext.lineTo(chessBoardSize, chessSquareLength*j);
        chessBoardContext.stroke();
        chessBoardContext.moveTo(chessSquareLength*i, 0);
        chessBoardContext.lineTo(chessSquareLength*i, chessBoardSize);
        chessBoardContext.stroke();
        let left = 0;
        for(let k = 0; k < 8; k++)
        {
          for(let m = 0; m < 8; m+=2)
          {
            let xPos = m * chessSquareLength;
            if(k%2 == 0)
            {
              xPos = (m + 1) * chessSquareLength;
              chessBoardContext.fillRect(xPos + left, k*chessSquareLength, chessSquareLength, chessSquareLength);
            }
            else
            {
              chessBoardContext.fillRect(xPos + left, k*chessSquareLength, chessSquareLength, chessSquareLength);
              let holdTransform = chessBoardContext.getTransform();
              rook.moveTo(xPos+left+halfSquare, k*chessSquareLength + halfSquare);
              chessBoardContext.setTransform(0.5, 0, 0, 0.5, halfSquare + 15, halfSquare + 10);
              chessBoardContext.fillStyle = "red";
              //chessBoardContext.fill(rook);
              chessBoardContext.setTransform(holdTransform);
              chessBoardContext.fillStyle = "black";
              // chessBoardContext.fill(rook);

            }



          }
        }

      }
    }
  }



}