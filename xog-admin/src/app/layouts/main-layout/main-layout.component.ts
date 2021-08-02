import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-main-layout',
  animations: [
    trigger('expandShrink', [
      state('expanded', style({
        width: '250px',
      })),
      state('shrinked', style({  
        width: '60px'
      })),
      transition('expanded => shrinked', [
        animate('0.15s')
      ]),
      transition('shrinked => expanded', [
        animate('0.15s')
      ]),
    ]),
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  navOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
