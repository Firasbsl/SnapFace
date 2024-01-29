import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnap } from './models/face-snap.model';
import { NgFor, NgIf, registerLocaleData } from '@angular/common';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FaceSnapComponent ,NgIf,NgFor , FaceSnapListComponent , HeaderComponent],
 
    
})
export class AppComponent implements OnInit {
 
 
  ngOnInit() {
   
  }
}
