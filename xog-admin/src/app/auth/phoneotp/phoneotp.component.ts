import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-phoneotp',
  templateUrl: './phoneotp.component.html',
  styleUrls: ['./phoneotp.component.scss']
})
export class PhoneotpComponent implements OnInit {

  assetsUrl: string = environment.assetsUrl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
