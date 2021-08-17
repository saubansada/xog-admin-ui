import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  assetsUrl: string = environment.assetsUrl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
