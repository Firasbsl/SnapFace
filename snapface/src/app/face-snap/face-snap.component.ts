import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {DatePipe, DecimalPipe, NgClass, NgIf, NgStyle, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgIf,NgStyle,NgClass,TitleCasePipe , DatePipe , DecimalPipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;


  ngOnInit(): void {
   
    this.buttonText = 'Oh Snap!';
    }
  onSnap(){
    if(this.buttonText==="Oh Snap!"){
      this.faceSnap.snaps++;
      this.buttonText="Oops, unSnap!"
    }else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }

}
