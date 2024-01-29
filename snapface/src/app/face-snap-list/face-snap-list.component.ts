import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { faceSnapsService } from '../services/face-snaps.service';
import { AppComponent } from '../app.component';


@Component({
    selector: 'app-face-snap-list',
    standalone: true,
    templateUrl: './face-snap-list.component.html',
    styleUrl: './face-snap-list.component.scss',
    imports: [FaceSnapComponent ,AppComponent]
})
export class FaceSnapListComponent implements OnInit{
 
 
  faceSnaps!: FaceSnap[];
  constructor(private faceSnapService : faceSnapsService){}
  
  ngOnInit() : void {
    
    this.faceSnaps = this.faceSnapService.getAllFaceSnaps();
  }

}
